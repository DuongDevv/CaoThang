using System;
using System.Drawing;
using System.Windows.Forms;

namespace MayTinhBoTui
{
    public partial class Form1 : Form
    {
        // Cần khai báo các biến này ở ngoài để các hàm bên dưới dùng chung được
        private TextBox txtDisplay;
        private double resultValue = 0;
        private string operationPerformed = "";
        private bool isOperationPerformed = false;

        public Form1()
        {
            this.Text = "Máy tính bỏ túi";
            this.Size = new Size(315, 450);
            this.StartPosition = FormStartPosition.CenterScreen;
            this.FormBorderStyle = FormBorderStyle.FixedDialog;
            this.MaximizeBox = false;

            // 1. Ô hiển thị
            txtDisplay = new TextBox { 
                Location = new Point(10, 10), Width = 280, 
                Font = new Font("Arial", 24), TextAlign = HorizontalAlignment.Right,
                ReadOnly = true 
            };
            this.Controls.Add(txtDisplay);

            // 2. Mảng chứa nhãn các nút
            string[] buttons = { "7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "C", "=" };
            
            int xPos = 10, yPos = 70;
            for (int i = 0; i < buttons.Length; i++)
            {
                Button btn = new Button {
                    Text = buttons[i],
                    Size = new Size(60, 60),
                    Location = new Point(xPos, yPos),
                    Font = new Font("Arial", 14, FontStyle.Bold)
                };

                // Gán sự kiện
                if (buttons[i] == "=") btn.Click += btnEqual_Click;
                else if (buttons[i] == "C") btn.Click += btnClear_Click;
                else btn.Click += btnNumber_Click;

                this.Controls.Add(btn);

                xPos += 70;
                if ((i + 1) % 3 == 0) {
                    xPos = 10;
                    yPos += 70;
                }
            }

            // 3. Các nút phép tính
            string[] ops = { "+", "-", "*", "/" };
            yPos = 70;
            foreach (string op in ops) {
                Button btnOp = new Button {
                    Text = op, Size = new Size(60, 60),
                    Location = new Point(220, yPos),
                    BackColor = Color.Orange,
                    Font = new Font("Arial", 14, FontStyle.Bold)
                };
                btnOp.Click += btnOperator_Click;
                this.Controls.Add(btnOp);
                yPos += 70;
            }
        }

        // --- CÁC HÀM XỬ LÝ SỰ KIỆN (BẮT BUỘC PHẢI CÓ) ---

        private void btnNumber_Click(object sender, EventArgs e)
        {
            if ((txtDisplay.Text == "0") || (isOperationPerformed))
                txtDisplay.Clear();

            isOperationPerformed = false;
            Button button = (Button)sender;
            txtDisplay.Text += button.Text;
        }

        private void btnOperator_Click(object sender, EventArgs e)
        {
            Button button = (Button)sender;
            operationPerformed = button.Text;
            resultValue = double.Parse(txtDisplay.Text);
            isOperationPerformed = true;
        }

        private void btnClear_Click(object sender, EventArgs e)
        {
            txtDisplay.Text = "0";
            resultValue = 0;
        }

        private void btnEqual_Click(object sender, EventArgs e)
        {
            switch (operationPerformed)
            {
                case "+": txtDisplay.Text = (resultValue + double.Parse(txtDisplay.Text)).ToString(); break;
                case "-": txtDisplay.Text = (resultValue - double.Parse(txtDisplay.Text)).ToString(); break;
                case "*": txtDisplay.Text = (resultValue * double.Parse(txtDisplay.Text)).ToString(); break;
                case "/": txtDisplay.Text = (resultValue / double.Parse(txtDisplay.Text)).ToString(); break;
            }
            isOperationPerformed = true;
        }
    }
}