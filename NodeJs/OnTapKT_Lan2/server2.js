const http = require('http')
const fs = require('fs')
const url = require('url')
const mysql = require('mysql2')
const queryString = require("querystring")

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'tuan09_db',
})

connection.connect((err) => {
    if (err) {
        console.log(`Lỗi kết nối CSDL: ${err}`)
        return
    }
    console.log(`Kết nối CSDL thành công!`)
})

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true)
    if(parsedUrl.pathname == '/') {
        fs.readFile('./html/index.html', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(404)
                res.end('File không tồn tại')
            } else {
                connection.query('SELECT * FROM sinh_vien', function (err, rows, fields) {
                    if (err instanceof Error) {
                        console.log(`Lỗi thực thi truy vấn SQL: ${err}`)
                        res.writeHead(500, {'Content-Type': 'text/html'})
                        res.end(`Lỗi thực thi truy vấn SQL: ${err}`)
                    } else {
                        let htmlTableBody = ""
                        rows.forEach((row) => {
                            htmlTableBody += `<tr>
                                <td>${row.mssv}</td>
                                <td>${row.ho_ten}</td>
                                <td>${row.tong_ket}</td>
                                <td>
                                    <a href='update?id=${row.id}'>Cập nhật</a> | <a href='delete?id=${row.id}'>Xóa</a>
                                </td>
                            </tr>`
                        })

                        data = data.replace('[TBODY_DATA]', htmlTableBody)

                        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'})
                        res.end(data)
                    }
                })
                
            }
        })
    } else if (parsedUrl.pathname == '/add-new') {
        if(req.method == "GET") {
            fs.readFile('./html/form.html', 'utf-8', (err, data) => {
                if (err) {
                    res.writeHead(404)
                    res.end('File không tồn tại')
                } else {
                    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'})
                    res.end(data)
                }
            })
        } else if (req.method == "POST") {
            let bodyData = ""

            req.on("data", (chunk) => {
                console.log("Chunk: ", chunk)
                bodyData += chunk
            })
            // STREAMING DATA
            // chunk1 = "mssv=0306121123"
            // chunk2 = "&ho_ten=Peter"
            // chunk3 = "&tong_ket=8"

            req.on("end", () => {
                // bodyData = "mssv=0306121123&ho_ten=Peter&tong_ket=8"
                console.log("bodyData: ", bodyData)
                const data = queryString.parse(bodyData)

                console.log("data", data)
                // data = {
                //     mssv: '0306121123',
                //     ho_ten: 'Peter',
                //     tong_ket: 8
                // }
                const sqlIns = `INSERT INTO sinh_vien(mssv, ho_ten, tong_ket) VALUES ('${data.mssv}', '${data.ho_ten}', ${data.tong_ket})`
                connection.query(sqlIns, (err, result, fields) => {
                    if (err instanceof Error) {
                        res.writeHead(500, {'Content-Type': 'text/html; charset=utf8'})
                        res.end(`Lỗi thực thi truy vấn SQL: ${err}`)
                        return
                    }

                    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'})
                    res.end("Thêm sinh viên thành công!")
                })
            })
        }
    } else if (parsedUrl.pathname == '/update') {
        

        if(req.method == "GET") {
            const id = parsedUrl.query.id ?? ""
            if (id == "") {
                res.writeHead(500, {'Content-Type': 'text/html; charset=utf8'})
                res.end(`Không thể cập nhật sinh viên!`)
                return
            }
            const sqlSelect = `SELECT * FROM sinh_vien WHERE id='${id}'`
            connection.query(sqlSelect, function (err, rows, fields) {
                if (err instanceof Error) {
                    console.log(`Lỗi thực thi truy vấn SQL: ${err}`)
                    res.writeHead(500, {'Content-Type': 'text/html; charset=utf8'})
                    res.end(`Lỗi thực thi truy vấn SQL: ${err}`)
                } else {
                    const sv = rows[0]
                    if (sv == undefined) {
                        res.writeHead(500, {'Content-Type': 'text/html; charset=utf8'})
                        res.end(`Thông tin Sinh viên không tồn tại!`)
                        return
                    }
                    fs.readFile('./html/form-update.html', 'utf-8', (err, data) => {
                        if (err) {
                            res.writeHead(404)
                            res.end('File không tồn tại')
                        } else {
                            data = data.replace('[ID]', sv.id)
                            data = data.replace('[MSSV]', sv.mssv)
                            data = data.replace('[HO_TEN]', sv.ho_ten)
                            data = data.replace('[TONG_KET]', sv.tong_ket)
                            res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'})
                            res.end(data)
                        }
                    })
                }
            })
        } else if (req.method == "POST") {
            let bodyData = ""

            req.on("data", (chunk) => {
                console.log("Chunk: ", chunk)
                bodyData += chunk
            })
            // STREAMING DATA
            // chunk1 = "mssv=0306121123"
            // chunk2 = "&ho_ten=Peter"
            // chunk3 = "&tong_ket=8"

            req.on("end", () => {
                // bodyData = "mssv=0306121123&ho_ten=Peter&tong_ket=8"
                console.log("bodyData: ", bodyData)
                const data = queryString.parse(bodyData)

                console.log("data", data)
                // data = {
                //     mssv: '0306121123',
                //     ho_ten: 'Peter',
                //     tong_ket: 8
                // }
                const sqlIns = `UPDATE sinh_vien SET ho_ten = '${data.ho_ten}', tong_ket = ${data.tong_ket} WHERE id=${data.id}`
                connection.query(sqlIns, (err, result, fields) => {
                    if (err instanceof Error) {
                        res.writeHead(500, {'Content-Type': 'text/html; charset=utf8'})
                        res.end(`Lỗi thực thi truy vấn SQL: ${err}`)
                        return
                    }

                    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'})
                    res.end("Cập nhật sinh viên thành công!")
                })
            })
        }
    } else if (parsedUrl.pathname == '/delete') {
         const id = parsedUrl.query.id ?? ""
        if (id == "") {
            res.writeHead(500, {'Content-Type': 'text/html; charset=utf8'})
            res.end(`Không thể xóa sinh viên!`)
            return
        }

        const sqlDel = `DELETE FROM sinh_vien WHERE id=${id}`
        connection.query(sqlDel, (err, result, fields) => {
            if (err instanceof Error) {
                res.writeHead(500, {'Content-Type': 'text/html; charset=utf8'})
                res.end(`Lỗi thực thi truy vấn SQL: ${err}`)
                return
            }

            console.log("DELETE RESULT", result)
            if (result.affectedRows == 0) {
                res.writeHead(500, {'Content-Type': 'text/html; charset=utf8'})
                res.end("Không tìm thấy sinh viên!")
            } else {
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'})
                res.end("Xóa sinh viên thành công!<br/><a href='/'>Quay lại</a>")
            }
           
        })

        
    } else {
        res.writeHead(500, {'Content-Type': 'text/html; charset=utf8'})
        res.end("Không tìm thấy!")
    }

})

server.listen(8000, () => {
	console.log('Server tại http://localhost:8000')
})
