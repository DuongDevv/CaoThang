using System;
using System.Collections.Generic;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Windows.Forms;

namespace WindowsFormsApp1
{
    public partial class Form1 : Form
    {
        // 1. Quản lý danh sách 100 ghế và dữ liệu từng phim
        private List<CheckBox> allSeats = new List<CheckBox>();
        private Dictionary<string, List<string>> movieData = new Dictionary<string, List<string>>();
        private int totalSelected = 0; // Đếm số ghế đang chọn của khách hiện tại

        public Form1()
        {
            InitializeComponent();
        }
        private void checkBox70_CheckedChanged(object sender, EventArgs e) {}

        /// <summary>
        /// Sự kiện chạy khi Form bắt đầu mở lên
        /// </summary>
        private void Form1_Load(object sender, EventArgs e)
        {
            // A. Tự động lấy danh sách phim từ Collection bạn đã nhập trong ComboBox
            foreach (var item in cbb_Film.Items)
            {
                string movieName = item.ToString();
                if (!movieData.ContainsKey(movieName))
                {
                    movieData.Add(movieName, new List<string>());
                }
            }

            // B. Gom tất cả CheckBox ghế vào danh sách quản lý chung
            foreach (Control c in grb_Seats.Controls)
            {
                if (c is CheckBox chk)
                {
                    allSeats.Add(chk);
                    // Gán sự kiện đếm số lượng cho từng ghế
                    chk.CheckedChanged += Seat_CheckedChanged;
                }
            }

            // C. Khóa rạp phim lại, yêu cầu khách chọn phim trước
            grb_Seats.Enabled = false;
        }

        /// <summary>
        /// Hàm lấy tên ghế ngắn gọn (Ví dụ: từ tên biến chk_A1 trả về "A1")
        /// </summary>
        private string GetSeatName(CheckBox chk)
        {
            return chk.Name.Replace("chk_", "");
        }

        /// <summary>
        /// Tự động cập nhật ô Số lượng vé khi người dùng tích chọn ghế
        /// </summary>
        private void Seat_CheckedChanged(object sender, EventArgs e)
        {
            // Chỉ đếm những ghế đang mở (Enabled = true)
            if (sender is CheckBox chk && chk.Enabled)
            {
                if (chk.Checked) totalSelected++;
                else totalSelected--;

                nud_Quantity.Value = totalSelected;
            }
        }

        /// <summary>
        /// Thay đổi sơ đồ ghế khi người dùng chọn phim khác nhau
        /// </summary>
        private void cbb_Film_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (cbb_Film.SelectedIndex == -1) return;

            string selectedFilm = cbb_Film.SelectedItem.ToString();
            grb_Seats.Enabled = true; // Mở rạp
            grb_Seats.Text = "Sơ đồ ghế phim: " + selectedFilm;

            // Lấy danh sách những ghế đã được bán của phim này
            List<string> soldSeats = movieData[selectedFilm];

            foreach (var seat in allSeats)
            {
                string name = GetSeatName(seat);
                seat.Checked = false; // Bỏ tích chọn của người trước

                if (soldSeats.Contains(name))
                {
                    // Ghế này đã có người mua cho phim này rồi
                    seat.Enabled = false;
                    seat.BackColor = Color.Red;
                }
                else
                {
                    // Ghế vẫn còn trống
                    seat.Enabled = true;
                    seat.BackColor = default;
                }
            }

            // Reset lại bộ đếm cho khách mới
            totalSelected = 0;
            nud_Quantity.Value = 0;
        }

        /// <summary>
        /// Nút IN VÉ: Lưu dữ liệu vào phim và khóa ghế vĩnh viễn
        /// </summary>
        private void btn_Print_Click(object sender, EventArgs e)
        {
            string currentFilm = cbb_Film.Text;

            // Kiểm tra điều kiện đầu vào
            if (string.IsNullOrWhiteSpace(txt_Customer.Text))
            {
                MessageBox.Show("Vui lòng nhập tên khách hàng!", "Thông báo");
                return;
            }

            if (string.IsNullOrEmpty(currentFilm))
            {
                MessageBox.Show("Vui lòng chọn phim trước!", "Thông báo");
                return;
            }

            // Lấy danh sách các ghế mà khách đang tích chọn
            var selectedNow = allSeats.Where(s => s.Checked && s.Enabled).ToList();

            if (selectedNow.Count == 0)
            {
                MessageBox.Show("Vui lòng chọn ít nhất một chỗ ngồi!", "Thông báo");
                return;
            }

            // Tiến hành lưu ghế vào dữ liệu của phim hiện tại và khóa ghế
            foreach (var chk in selectedNow)
            {
                string seatName = GetSeatName(chk);
                movieData[currentFilm].Add(seatName); // Lưu mã ghế vào "sổ cái"

                chk.Checked = false;
                chk.Enabled = false;
                chk.BackColor = Color.Red;
            }

            // Hiển thị thông tin hóa đơn
            string seatList = string.Join(", ", selectedNow.Select(s => GetSeatName(s)));
            string receipt = $"--- HÓA ĐƠN ĐẶT VÉ ---\n" +
                             $"Khách hàng: {txt_Customer.Text}\n" +
                             $"Phim: {currentFilm}\n" +
                             $"Ghế đặt: {seatList}\n" +
                             $"Số lượng: {selectedNow.Count}\n" +
                             $"---------------------";

            MessageBox.Show(receipt, "Thành công");

            // Reset bộ đếm số lượng cho lượt tiếp theo
            totalSelected = 0;
            nud_Quantity.Value = 0;
        }

        /// <summary>
        /// Nút VÉ MỚI: Xóa thông tin khách cũ nhưng KHÔNG xóa ghế đã bán
        /// </summary>
        private void btn_Newticket_Click(object sender, EventArgs e)
        {
            txt_Customer.Clear();
            foreach (var s in allSeats)
            {
                if (s.Enabled) s.Checked = false;
            }
            totalSelected = 0;
            nud_Quantity.Value = 0;
            txt_Customer.Focus();
        }

        /// <summary>
        /// Nút ĐÓNG: Thoát chương trình
        /// </summary>
        private void btn_Close_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }
    }
}