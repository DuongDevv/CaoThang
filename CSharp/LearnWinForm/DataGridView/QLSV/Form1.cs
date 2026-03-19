using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Windows.Forms.VisualStyles.VisualStyleElement.ListView;
using System.Xml.Linq;

namespace QLSV
{
    public partial class Form1 : Form
    {

        string connectionString = @"Data Source=F71-27;Initial Catalog=QLSinhVien;Integrated Security=True";
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            loadSV();
        }

        private void loadSV()
        {
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                try
                {
                    conn.Open();
                    string query = "SELECT MSSV AS 'MSSV', Ho AS 'Họ SV', Ten AS 'Tên SV', l.TenLop AS 'Lớp', DiaChi AS 'Địa chỉ',TrangThai as 'Trạng Thái', NgaySinh AS 'Ngày Sinh'" +
                        " FROM SinhVien sv join Lop l on sv.Lop = l.MaLop";
                    SqlDataAdapter adapter = new SqlDataAdapter(query, conn);
                    DataTable dataTable = new DataTable();
                    adapter.Fill(dataTable);
                    dgvList.DataSource = dataTable;

                }
                catch (Exception ex)
                {
                    MessageBox.Show("Lỗi khi tải dữ liệu: " + ex.ToString());
                }
            }
        }

        private void btnRefresh_Click(object sender, EventArgs e)
        {
            txtID.Clear();
            txtFirstName.Clear();
            txtLastName.Clear();
            DateTime dtpDate = DateTime.Now;
            cboClass.SelectedIndex = -1;
            rtxtAddress.Clear();

            txtID.Focus();

        }

        private void btnAdd_Click(object sender, EventArgs e)
        {
            string id = txtID.Text.Trim();
            string fname = txtFirstName.Text.Trim();
            string lname = txtLastName.Text.Trim();
            DateTime date = dtpDate.Value;
            string classname = cboClass.Text;
            string address = rtxtAddress.Text.Trim();

            if (string.IsNullOrWhiteSpace(fname) || string.IsNullOrWhiteSpace(lname) || string.IsNullOrWhiteSpace(id))
            {
                MessageBox.Show("Vui lòng nhập đủ 'Họ tên' và 'MSSV'", "Thông báo",
                    MessageBoxButtons.OK, MessageBoxIcon.Warning);
                txtID.Focus();
                return;
            }

            if(cboClass.SelectedIndex == -1)
            {
                MessageBox.Show("Vui lòng chọn 'Lớp'", "Thông báo",
                   MessageBoxButtons.OK, MessageBoxIcon.Warning);
                cboClass.Focus();
                return;
            }

            if (string.IsNullOrWhiteSpace(address))
            {
                MessageBox.Show("Vui lòng nhập 'Địa chỉ'", "Thông báo",
                   MessageBoxButtons.OK, MessageBoxIcon.Warning);
                rtxtAddress.Focus();
                return;
            }

            string query = "insert into SinhVien (MSSV,Ho,Ten,Lop,DiaChi,NgaySinh)" +
                "values (@Mssv,@Ho,@Ten,@Lop,@DiaChi,@NgaySinh)";

            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                try
                {
                    conn.Open();
                    SqlCommand cmd = new SqlCommand(query, conn);
                    cmd.Parameters.AddWithValue("@Mssv", id);
                    cmd.Parameters.AddWithValue("@Ho", lname);
                    cmd.Parameters.AddWithValue("@Ten", fname);
                    cmd.Parameters.AddWithValue("@Lop", classname);
                    cmd.Parameters.AddWithValue("@DiaChi", address);
                    cmd.Parameters.AddWithValue("@NgaySinh", date);

                    int check = cmd.ExecuteNonQuery();
                    if (check > 0)
                    {
                        MessageBox.Show("Thêm sinh viên mới thành công!", "Thành công");
                        loadSV();
                        btnRefresh_Click(sender, e);
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show("Lỗi khi thêm: " + ex.Message);
                }
            }
        }

     
    }
}
