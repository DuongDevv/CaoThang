using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace KiemTra
{
    public partial class Form1 : Form
    {
        private string curPath = null;
        public Form1()
        {
            InitializeComponent();
        }

        private void btnTaiAnh_Click(object sender, EventArgs e)
        {
            OpenFileDialog open = new OpenFileDialog();
            open.Filter = "Image Files(*.jpg; *.jpeg; *.png)|*.jpg; *.jpeg; *.png";
            open.Title = "Vui long chon 1 anh";

            string imgFolder = Path.Combine(Application.StartupPath, "Images");

            Directory.CreateDirectory(imgFolder);

            if(open.ShowDialog() == DialogResult.OK)
            {
                curPath = Path.Combine(imgFolder, Path.GetFileName(open.FileName));
                File.Copy(open.FileName, curPath, true);

                picbImage.Tag = curPath;

                using (var stream = new FileStream(curPath, FileMode.Open, FileAccess.Read))
                {
                    picbImage.Image = Image.FromStream(stream);
                }
            }
        }

        private void btnThem_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrWhiteSpace(txtMaSach.Text))
            {
                MessageBox.Show("Vui long nhap MaSach!", "Thong bao",
                    MessageBoxButtons.OK, MessageBoxIcon.Warning);
                txtMaSach.Focus();
                return;
            }

            if (string.IsNullOrWhiteSpace(txtTenSach.Text))
            {
                MessageBox.Show("Vui long nhap MaSach!", "Thong bao",
                    MessageBoxButtons.OK, MessageBoxIcon.Warning);
                txtTenSach.Focus();
                return;
            }

            if (!int.TryParse(txtGia.Text, out _))
            {
                MessageBox.Show("Gia phai la so nguyen!", "Thong bao",
                    MessageBoxButtons.OK, MessageBoxIcon.Warning);
                txtGia.Focus();
                return;
            }

            if (!int.TryParse(txtNamXB.Text, out int namXB))
            {
                MessageBox.Show("Nam xuat ban phai la so nguyen!", "Thong bao",
                    MessageBoxButtons.OK, MessageBoxIcon.Warning);
                txtNamXB.SelectAll();
                txtNamXB.Focus();
                return;
            }
            if (namXB <= 0 || namXB > 9999)
            {
                MessageBox.Show("Nam xuat ban phai lon hon 0 va be hon 4 so (VD: 2026)!", "Thông báo",
                    MessageBoxButtons.OK, MessageBoxIcon.Warning);
                txtNamXB.SelectAll();
                txtNamXB.Focus();
                return;
            }

            if (cboTheLoai.SelectedIndex == -1)
            {
                MessageBox.Show("Vui long chon TheLoai!", "Thong bao",
                    MessageBoxButtons.OK, MessageBoxIcon.Warning);
                cboTheLoai.Focus();
                return;
            }

            if (nudSoLuong.Value < 1)
            {
                MessageBox.Show("So luong it nhat la 1!", "Thông báo",
                    MessageBoxButtons.OK, MessageBoxIcon.Warning);
                nudSoLuong.Focus();
                return;
            }



            ListViewItem item = new ListViewItem((listQuanLy.Items.Count + 1).ToString()); // STT
            item.SubItems.Add(txtMaSach.Text);
            item.SubItems.Add(txtTenSach.Text);
            item.SubItems.Add(txtNamXB.Text);
            item.SubItems.Add(cboTheLoai.Text);
            item.SubItems.Add(nudSoLuong.Value.ToString());
            item.SubItems.Add(dtpNgayNhap.Value.ToString("dd/MM/yyyy"));

            item.Tag = picbImage.Tag;

            listQuanLy.Items.Add(item);

            CapNhatSTT();
            XoaTrangForm();
        }

        private void listQuanLy_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (listQuanLy.SelectedItems.Count > 0)
            {
                ListViewItem item = listQuanLy.SelectedItems[0];
                txtMaSach.Text = item.SubItems[1].Text;
                txtTenSach.Text = item.SubItems[2].Text;
                txtNamXB.Text = item.SubItems[3].Text;
                cboTheLoai.Text = item.SubItems[4].Text;
                nudSoLuong.Value = decimal.Parse(item.SubItems[5].Text);
                dtpNgayNhap.Value = DateTime.ParseExact(item.SubItems[6].Text, "dd/MM/yyyy", null);

                if (item.Tag != null && File.Exists(item.Tag.ToString()))
                {
                    picbImage.Tag = item.Tag.ToString();

                    if (picbImage.Image != null)
                    {
                        picbImage.Image.Dispose();
                    }

                    using (FileStream fs = new FileStream(item.Tag.ToString(), FileMode.Open, FileAccess.Read))
                    {
                        picbImage.Image = Image.FromStream(fs);
                    }
                }
                else
                {
                    if (picbImage.Image != null) picbImage.Image.Dispose();
                    picbImage.Image = null;
                    picbImage.Tag = null;
                }
            }
        }



        private void btnCapNhat_Click(object sender, EventArgs e)
        {
            if (listQuanLy.SelectedItems.Count > 0)
            {
                ListViewItem item = listQuanLy.SelectedItems[0];

                item.SubItems[1].Text = txtMaSach.Text;
                item.SubItems[2].Text = txtTenSach.Text;
                item.SubItems[3].Text = txtNamXB.Text;
                item.SubItems[4].Text = cboTheLoai.Text;
                item.SubItems[5].Text = nudSoLuong.Value.ToString();
                item.SubItems[6].Text = dtpNgayNhap.Value.ToString("dd/MM/yyyy");

                item.Tag = picbImage.Tag;

                MessageBox.Show("Cap nhat thanh cong!");
                XoaTrangForm();
            }
            else
            {
                MessageBox.Show("Vui long chon 1 dong de cap nhat!");
            }
        }

        private void btnXoa_Click(object sender, EventArgs e)
        {
            if (listQuanLy.SelectedItems.Count > 0)
            {
                DialogResult dr = MessageBox.Show("Ban co chac muon xoa khong?", "Xac nhan",
                    MessageBoxButtons.YesNo, MessageBoxIcon.Question);

                if (dr == DialogResult.Yes)
                {
                    listQuanLy.Items.Remove(listQuanLy.SelectedItems[0]);
                    CapNhatSTT();
                    XoaTrangForm();
                }
            }
            else
            {
                MessageBox.Show("Vui long chon 1 dong du lieu truoc de xoa!");
            }
        }
        private void XoaTrangForm()
        {
            txtMaSach.Clear();
            txtTenSach.Clear();
            txtNamXB.Clear();
            txtGia.Clear();
            cboTheLoai.SelectedIndex = -1;
            nudSoLuong.Value = 1;
            dtpNgayNhap.Value = DateTime.Now;
            picbImage.Image = null;
            picbImage.Tag = null;
        }
        private void CapNhatSTT()
        {
            for (int i = 0; i < listQuanLy.Items.Count; i++)
            {
                listQuanLy.Items[i].Text = (i + 1).ToString();
            }
        }

        private void txtNamXB_KeyPress(object sender, KeyPressEventArgs e)
        {
            if (!char.IsDigit(e.KeyChar) && !char.IsControl(e.KeyChar))
            {
                e.Handled = true;
            }
        }

        private void txtGia_KeyPress(object sender, KeyPressEventArgs e)
        {
            if (!char.IsDigit(e.KeyChar) && !char.IsControl(e.KeyChar))
            {
                e.Handled = true;
            }
        }
    }
}
