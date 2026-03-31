const http = require('http');
const mysql = require('mysql2/promise');
const url = require('url');
const fs = require('fs').promises;
const querystring = require('querystring');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root', 
    password: '', 
    database: 'cua_hang_db'
});

const getBody = (req) => new Promise((res) => {
    let b = '';
    req.on('data', c => b += c);
    req.on('end', () => res(querystring.parse(b)));
});

const render = async (fileName, data = {}) => {
    let content = await fs.readFile(`./views/${fileName}`, 'utf-8');
    for (let key in data) { 
        content = content.replace(new RegExp(`{{${key}}}`, 'g'), data[key]); 
    }
    return content;
};

const server = http.createServer(async (req, res) => {
    const { pathname, query } = url.parse(req.url, true);
    const method = req.method;
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    try {
        if (pathname === '/') {
            res.end(await render('index.html'));
        }

        else if (pathname === '/loai-san-pham') {
            const [rows] = await db.query('SELECT * FROM loai_san_pham');
            const htmlRows = rows.map(r => `<tr><td>${r.id}</td><td>${r.ten}</td>
                <td><a href="/loai-san-pham/cap-nhat?id=${r.id}">Sửa</a> | 
                    <a href="/loai-san-pham/xoa?id=${r.id}" onclick="return confirm('Xóa?')">Xóa</a></td></tr>`).join('');
            res.end(await render('loai_san_pham_list.html', { content: htmlRows }));
        }

        else if (pathname === '/loai-san-pham/them-moi') {
            if (method === 'GET') {
                res.end(await render('loai_san_pham_form.html', { title: 'Thêm Loại SP', ten: '' }));
            } else {
                const { ten } = await getBody(req);
                await db.query('INSERT INTO loai_san_pham (ten) VALUES (?)', [ten]);
                res.writeHead(302, { 'Location': '/loai-san-pham' }).end();
            }
        }

        else if (pathname === '/loai-san-pham/cap-nhat') {
            if (method === 'GET') {
                const [[lsp]] = await db.query('SELECT * FROM loai_san_pham WHERE id = ?', [query.id]);
                res.end(await render('loai_san_pham_form.html', { title: 'Sửa Loại SP', ten: lsp.ten }));
            } else {
                const { ten } = await getBody(req);
                await db.query('UPDATE loai_san_pham SET ten=? WHERE id=?', [ten, query.id]);
                res.writeHead(302, { 'Location': '/loai-san-pham' }).end();
            }
        }

        else if (pathname === '/loai-san-pham/xoa') {
            await db.query('DELETE FROM loai_san_pham WHERE id = ?', [query.id]);
            res.writeHead(302, { 'Location': '/loai-san-pham' }).end();
        }

        else if (pathname === '/san-pham') {
            const [rows] = await db.query('SELECT sp.*, lsp.ten as ten_loai FROM san_pham sp LEFT JOIN loai_san_pham lsp ON sp.loai_san_pham_id = lsp.id');
            const htmlRows = rows.map(r => `<tr>
                <td>${r.id}</td>
                <td>${r.ten}</td>
                <td>${r.ten_loai || 'N/A'}</td>
                <td>${r.don_gia.toLocaleString()}</td><td>${r.mo_ta || ''}</td>
                <td><a href="/san-pham/cap-nhat?id=${r.id}">Sửa</a> | 
                    <a href="/san-pham/xoa?id=${r.id}" onclick="return confirm('Xóa?')">Xóa</a></td></tr>`).join('');
            res.end(await render('san_pham_list.html', { content: htmlRows }));
        }

        else if (pathname === '/san-pham/them-moi') {
            if (method === 'GET') {
                const [loais] = await db.query('SELECT * FROM loai_san_pham');
                const options = loais.map(l => `<option value="${l.id}">${l.ten}</option>`).join('');
                res.end(await render('san_pham_form.html', { title: 'Thêm SP', ten: '', don_gia: 0, mo_ta: '', options }));
            } else {
                const d = await getBody(req);
                await db.query('INSERT INTO san_pham (ten, loai_san_pham_id, mo_ta, don_gia) VALUES (?,?,?,?)', 
                    [d.ten, d.loai_san_pham_id, d.mo_ta, d.don_gia]);
                res.writeHead(302, { 'Location': '/san-pham' }).end();
            }
        }

        else if (pathname === '/san-pham/cap-nhat') {
            if (method === 'GET') {
                const [[sp]] = await db.query('SELECT * FROM san_pham WHERE id = ?', [query.id]);
                const [loais] = await db.query('SELECT * FROM loai_san_pham');
                const options = loais.map(l => `<option value="${l.id}" ${l.id === sp.loai_san_pham_id ? 'selected':''}>${l.ten}</option>`).join('');
                res.end(await render('san_pham_form.html', { title: 'Sửa SP', ten: sp.ten, don_gia: sp.don_gia, mo_ta: sp.mo_ta, options }));
            } else {
                const d = await getBody(req);
                await db.query('UPDATE san_pham SET ten=?, loai_san_pham_id=?, mo_ta=?, don_gia=? WHERE id=?', 
                    [d.ten, d.loai_san_pham_id, d.mo_ta, d.don_gia, query.id]);
                res.writeHead(302, { 'Location': '/san-pham' }).end();
            }
        }

        else if (pathname === '/san-pham/xoa') {
            await db.query('DELETE FROM san_pham WHERE id = ?', [query.id]);
            res.writeHead(302, { 'Location': '/san-pham' }).end();
        }

        else { res.writeHead(404).end('Không tìm thấy trang'); }

    } catch (e) {
        res.end(`<h3>Lỗi hệ thống: ${e.message}</h3><a href="/">Quay lại</a>`);
    }
});

server.listen(3000, () => console.log('Đã chạy: http://localhost:3000'));
