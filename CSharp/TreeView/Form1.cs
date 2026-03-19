using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Windows.Forms;

namespace bai01
{
    public partial class Form1 : Form
    {
        // <DỮ LIỆU & BIẾN TOÀN CỤC >
        // List<Product> dùng để lưu TOÀN BỘ sản phẩm
        // Vì sao không lưu trong ListView?
        // Vì ListView chỉ là UI (hiển thị), không phải dữ liệu gốc
        // Lưu ở đây giúp: lọc, tìm kiếm, mở rộng, lưu file dễ hơn
        List<Product> products = new List<Product>();

        // <Đường dẫn thư mục Images>
        // Vì sao không lưu ảnh trong bin?
        // Vì khi build lại project, bin sẽ bị xóa
        // Đưa Images ra ngoài giúp ảnh không bị mất
        string imageFolder = Path.Combine(
            Path.GetDirectoryName(Path.GetDirectoryName(Application.StartupPath)),
            "Images");

        // <Lưu tên file ảnh hiện tại>
        // Vì sao cần biến này?
        // Khi Add hoặc Edit, cần biết ảnh nào đang được chọn
        // Tránh mất ảnh cũ khi sửa sản phẩm
        string currentFileName = "";

        //<CONSTRUCTOR>
        public Form1()
        {
            InitializeComponent();

            // <Kiểm tra nếu chưa có thư mục Images thì tạo>
            // Vì sao phải kiểm tra?
            // Tránh lỗi khi copy file ảnh
            if (!Directory.Exists(imageFolder))
                Directory.CreateDirectory(imageFolder);

            // <Các thuộc tính UI cho ListView>
            // Vì sao dùng?
            // FullRowSelect: click chọn nguyên dòng
            // GridLines: hiển thị dạng bảng rõ ràng
            lstProducts.FullRowSelect = true;
            lstProducts.GridLines = true;
        }

        //<CLEAR FORM>
        private void ClearForm()
        {
            // Xóa dữ liệu nhập sau khi Add / Delete
            txtName.Clear();
            txtPrice.Clear();
            rtxtDetail.Clear();
            cbbLoaiSP.SelectedIndex = -1;

            // RẤT QUAN TRỌNG
            // Vì sao phải Dispose Image?
            // Nếu không Dispose → bị leak bộ nhớ, lock file ảnh
            pictureBox1.Image?.Dispose();
            pictureBox1.Image = null;

            // Reset tên file ảnh
            currentFileName = "";

            cbbLoaiSP.Focus();
        }

        //<CHỌN ẢNH>
        private void pictureBox1_Click(object sender, EventArgs e)
        {
            using (OpenFileDialog ofd = new OpenFileDialog())
            {
                ofd.Filter = "Image Files (*.jpg; *.png)|*.jpg;*.png";

                if (ofd.ShowDialog() == DialogResult.OK)
                {
                    // Giải phóng ảnh cũ trước khi load ảnh mới
                    pictureBox1.Image?.Dispose();

                    // Vì sao dùng MemoryStream?
                    // Image.FromFile sẽ LOCK file
                    // MemoryStream giúp copy/xóa ảnh thoải mái
                    using (var ms = new MemoryStream(File.ReadAllBytes(ofd.FileName)))
                    {
                        pictureBox1.Image = Image.FromStream(ms);
                    }

                    pictureBox1.SizeMode = PictureBoxSizeMode.StretchImage;

                    // Vì sao dùng Guid?
                    // Tránh trùng tên file ảnh
                    // Không bị ghi đè ảnh cũ
                    currentFileName = Guid.NewGuid() + Path.GetExtension(ofd.FileName);
                    
                    string destPath = Path.Combine(imageFolder, currentFileName);
                    File.Copy(ofd.FileName, destPath, true);
                }
            }
        }

        //< THAY ĐỔI KIỂU HIỂN THỊ LISTVIEW>

        // Vì sao cần nhiều View?
        // Cho người dùng chọn cách xem (SmallIcon, List, Details, LargeIcon)
        private void rdbSmall_CheckedChanged(object sender, EventArgs e)
        {
            if (rdbSmall.Checked) lstProducts.View = View.SmallIcon;
        }

        private void rdbList_CheckedChanged(object sender, EventArgs e)
        {
            if (rdbList.Checked) lstProducts.View = View.List;
        }

        private void rdbDetail_CheckedChanged(object sender, EventArgs e)
        {
            if (rdbDetail.Checked) lstProducts.View = View.Details;
        }

        private void rdbLarge_CheckedChanged(object sender, EventArgs e)
        {
            if (rdbLarge.Checked) lstProducts.View = View.LargeIcon;
        }

        // <CHỌN SẢN PHẨM TRONG LISTVIEW> 
        private void lstProducts_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (lstProducts.SelectedItems.Count == 0) return;

            // Vì sao dùng Tag?
            // Tag lưu object Product gốc
            // Không cần parse text từ ListView
            Product p = (Product)lstProducts.SelectedItems[0].Tag;

            // Đổ dữ liệu từ Product lên Form
            txtName.Text = p.Name;
            txtPrice.Text = p.Price.ToString();
            rtxtDetail.Text = p.Description;
            cbbLoaiSP.Text = p.Category;

            // Load lại ảnh tương ứng sản phẩm
            string path = Path.Combine(imageFolder, p.ImageFileName);
            if (File.Exists(path))
            {
                pictureBox1.Image?.Dispose();
                using (var ms = new MemoryStream(File.ReadAllBytes(path)))
                {
                    pictureBox1.Image = Image.FromStream(ms);
                }
            }
        }

        // <ADD SẢN PHẨM>
        private void btnAdd_Click(object sender, EventArgs e)
        {
            // Bắt buộc chọn ảnh
            if (string.IsNullOrEmpty(currentFileName))
            {
                MessageBox.Show("Vui lòng chọn hình ảnh sản phẩm!");
                return;
            }

            // Bắt buộc chọn loại
            if (cbbLoaiSP.SelectedIndex == -1)
            {
                MessageBox.Show("Vui lòng chọn loại sản phẩm!");
                return;
            }

            // Vì sao dùng decimal.TryParse?
            // decimal dùng cho tiền
            // TryParse tránh crash chương trình
            if (!decimal.TryParse(txtPrice.Text, out decimal price))
            {
                MessageBox.Show("Giá không hợp lệ!");
                return;
            }

            if (string.IsNullOrWhiteSpace(txtName.Text))
            {
                MessageBox.Show("Vui lòng nhập tên sản phẩm!");
                return;
            }

            // <Tạo Product>
            // Category dùng để làm gì?
            // Dùng để phân biệt Món nướng, Món lẩu, ...
            Product p = new Product(
                txtName.Text,
                price,
                rtxtDetail.Text,
                currentFileName,
                cbbLoaiSP.Text
            );

            // Thêm vào danh sách gốc
            products.Add(p);

            // Hiển thị lên ListView
            ListViewItem item = new ListViewItem(p.Name);
            item.SubItems.Add(p.Price.ToString("N0"));
            item.SubItems.Add(p.Description);
            item.Tag = p; // lưu Product trong Tag

            lstProducts.Items.Add(item);
            ClearForm();
        }

        //  <DELETE >
        private void btnDelete_Click(object sender, EventArgs e)
        {
            if (lstProducts.SelectedItems.Count == 0) return;

            var item = lstProducts.SelectedItems[0];
            Product p = (Product)item.Tag;

            // Vì sao xóa cả 2?
            // Xóa trong products để mất dữ liệu
