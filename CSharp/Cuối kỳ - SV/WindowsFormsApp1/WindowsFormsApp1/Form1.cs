using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Security.Policy;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp1
{
    public partial class Form1 : Form
    {
        SqlConnection conn = new SqlConnection(@"Data Source=F715-20;Initial Catalog=CuaHangBanSua;Integrated Security=True");
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            LoadProductType();
            LoadData();
            cboSupplier.Items.AddRange(new string[] { "Abbott", "Anlene", "Vinamilk", "Nutifood" });
        }

        private void LoadProductType()
        {
            SqlDataAdapter da = new SqlDataAdapter("select * from LoaiSua where TrangThai=1", conn);
            DataTable dt = new DataTable();
            da.Fill(dt);
            cboProductType.DataSource = dt;
            cboProductType.DisplayMember = "TenLoai";
            cboProductType.ValueMember = "MaLoai";
        }

        private void LoadData()
        {
            SqlDataAdapter da = new SqlDataAdapter("select * from SanPhamSua", conn);
            DataTable dt = new DataTable();
            da.Fill(dt);
            dgvListProduct.DataSource = dt;
        }

        private string AutoCreateID()
        {
            SqlCommand cmd = new SqlCommand("select max(MaSua) from SanPhamSua", conn);
            conn.Open();
            var result = cmd.ExecuteScalar();
            conn.Close();

            if (result != DBNull.Value && result != null)
            {
                string lastMa = result.ToString();
                int num = int.Parse(lastMa.Substring(2));
                return "SP" + (num + 1);
            }
            else
            {
                return "SP1";
            }
        }

        private void picProductImage_Click(object sender, EventArgs e)
        {
            OpenFileDialog ofd = new OpenFileDialog();
            ofd.Filter = "Image Files|*.jpg;*.png;*.gif";
            if (ofd.ShowDialog() == DialogResult.OK)
            {
                picProductImage.Image = Image.FromFile(ofd.FileName);
                picProductImage.Tag = ofd.FileName;
            }
        }

        private void btnAdd_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrWhiteSpace(txtProductName.Text))
            {
                MessageBox.Show("Tên sản phẩm không được bỏ trống");
                txtProductName.Focus();
                return;
            }

            string maSua = string.IsNullOrEmpty(txtID.Text) ? AutoCreateID() : txtID.Text;

            using (SqlCommand cmd = new SqlCommand("INSERT INTO SanPhamSua VALUES(@MaSua,@TenSua,@GiaBan,@MaLoai,@HinhAnh,@NhaSX,@MoTa,1)", conn))
            {
                cmd.Parameters.AddWithValue("@MaSua", maSua);
                cmd.Parameters.AddWithValue("@TenSua", txtProductName.Text);
                cmd.Parameters.AddWithValue("@GiaBan", decimal.Parse(txtPrice.Text));
                cmd.Parameters.AddWithValue("@MaLoai", cboProductType.SelectedValue);
                cmd.Parameters.AddWithValue("@HinhAnh", picProductImage.Tag ?? "");
                cmd.Parameters.AddWithValue("@NhaSX", cboSupplier.Text);
                cmd.Parameters.AddWithValue("@MoTa", txtDescrip.Text);

                conn.Open();
                cmd.ExecuteNonQuery();
                conn.Close();
            }

            LoadData();
            MessageBox.Show("Thêm sản phẩm thành công!");

        }

        private void btnEdit_Click(object sender, EventArgs e)
        {
            using (SqlCommand cmd = new SqlCommand("UPDATE SanPhamSua SET TenSua=@TenSua, GiaBan=@GiaBan, MaLoai=@MaLoai, HinhAnh=@HinhAnh, NhaSanXuat=@NhaSX, MoTa=@MoTa WHERE MaSua=@MaSua", conn))
            {
                cmd.Parameters.AddWithValue("@MaSua", txtID.Text);
                cmd.Parameters.AddWithValue("@TenSua", txtProductName.Text);
                cmd.Parameters.AddWithValue("@GiaBan", decimal.Parse(txtPrice.Text));
                cmd.Parameters.AddWithValue("@MaLoai", cboProductType.SelectedValue);
                cmd.Parameters.AddWithValue("@HinhAnh", picProductImage.Tag ?? "");
                cmd.Parameters.AddWithValue("@NhaSX", cboSupplier.Text);
                cmd.Parameters.AddWithValue("@MoTa", txtDescrip.Text);

                conn.Open();
                cmd.ExecuteNonQuery();
                conn.Close();
            }

            LoadData();
            MessageBox.Show("Cập nhật sản phẩm thành công!");
        }

        private void btnReset_Click(object sender, EventArgs e)
        {
            txtID.ReadOnly = false;
            txtID.Clear();
            txtProductName.Clear();
            txtPrice.Clear();
            txtDescrip.Clear();
            cboProductType.SelectedIndex = -1;
            cboSupplier.SelectedIndex = -1;
            picProductImage.Image = null;
        }

        private void dgvListProduct_CellClick(object sender, DataGridViewCellEventArgs e)
        {
            if (e.RowIndex >= 0)
            {
                DataGridViewRow row = dgvListProduct.Rows[e.RowIndex];
                txtID.Text = row.Cells["MaSua"].Value.ToString();
                txtProductName.Text = row.Cells["TenSua"].Value.ToString();
                txtPrice.Text = row.Cells["GiaBan"].Value.ToString();
                cboProductType.SelectedValue = row.Cells["MaLoai"].Value;
                cboSupplier.Text = row.Cells["NhaSanXuat"].Value.ToString();
                txtDescrip.Text = row.Cells["MoTa"].Value.ToString();

                string imagePath = row.Cells["HinhAnh"].Value.ToString();
                picProductImage.Tag = imagePath;
                if (System.IO.File.Exists(imagePath))
                    picProductImage.Image = Image.FromFile(imagePath);
                else
                    picProductImage.Image = null;

                txtID.ReadOnly = true;
                txtID.Enabled = false;
            }
        }

        private void txtPrice_KeyPress(object sender, KeyPressEventArgs e)
        {
            if (!char.IsDigit(e.KeyChar) && e.KeyChar != (char)8)
                e.Handled = true;
        }
    }
    }
