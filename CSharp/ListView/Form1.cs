    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Data;
    using System.Drawing;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using System.Windows.Forms;

    namespace main
    {
        public partial class Form1 : Form
        {
            public Form1()
            {
                InitializeComponent();
            }

            private void label3_Click(object sender, EventArgs e)
            {

            }

            private void listView1_SelectedIndexChanged(object sender, EventArgs e)
            {

            }

            private void groupBox1_Enter(object sender, EventArgs e)
            {

            }

            private void btn_Add_Click(object sender, EventArgs e)
            {
                string name = txt_Name.Text;
                string account= txt_Account.Text;
                string date = dtp_Date.Value.ToString("dd/MM/yyyy");
                string state = chk_Online.Checked ? "Online" : "Offline";
                string gender = rbtn_FemaleSex.Checked ? "Nữ" : "Nam";
                if(string.IsNullOrWhiteSpace(txt_Account.Text))
                {
                    MessageBox.Show("Vui lòng nhập Tài Khoản!","Thông báo",
                        MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    txt_Account.Focus();
                    return;
                }
                //Kiem tra tai khong bi trung
                foreach (ListViewItem oldItem in lstV_Table.Items)
                {
                    if (oldItem.SubItems[0].Text.Equals(account,
                        StringComparison.OrdinalIgnoreCase))
                    {
                        MessageBox.Show("Tài khoản này đã tồn tại! Vui lòng nhập tên khác.", "Lỗi trùng lặp",
                                        MessageBoxButtons.OK, MessageBoxIcon.Error);
                        txt_Account.Focus();
                        txt_Account.SelectAll();
                        return;
                    }
                }
                if (string.IsNullOrWhiteSpace(txt_Name.Text))
                {
                    MessageBox.Show("Vui lòng nhập Họ tên!","Thông báo",
                        MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    txt_Name.Focus();
                    return;
                }
                if(rbtn_FemaleSex.Checked!=true && rbtn_MaleSex.Checked != true)
                {
                    MessageBox.Show("Vui lòng chọn Giới tính!","Thông báo",
                        MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    return;
                }

                ListViewItem item = new ListViewItem(account);
                item.SubItems.Add(name);
                item.SubItems.Add(date);
                item.SubItems.Add(gender);
                item.SubItems.Add(state);
                lstV_Table.Items.Add(item);
                txt_Account.Clear();
                txt_Name.Clear();
                chk_Online.Checked = false;
                rbtn_FemaleSex.Checked = false;
                rbtn_MaleSex.Checked = false;
                txt_Account.Focus();
            }

            private void btn_Delete_Click(object sender, EventArgs e)
            {
                if(lstV_Table.CheckedItems.Count > 0)
                {
                    foreach (ListViewItem item in lstV_Table.SelectedItems)
                    {
                        lstV_Table.Items.Remove(item);
                    }

                }
            }

            private void btn_Fix_Click(object sender, EventArgs e)
            {
                if(lstV_Table.SelectedItems.Count > 0)
                {
                    ListViewItem item = lstV_Table.SelectedItems[0];
                    item.SubItems[0].Text=txt_Account.Text;
                    item.SubItems[1].Text=txt_Name.Text;
                    item.SubItems[2].Text=dtp_Date.Value.ToString("dd/MM/yyyy");
                    item.SubItems[3].Text = rbtn_FemaleSex.Checked ? "Nữ" : "Nam";
                    item.SubItems[4].Text = chk_Online.Checked ? "Hoạt động" : "Không hoạt động";
                }
            }

            private void btn_Replace_Click(object sender, EventArgs e)
            {
            txt_Account.Clear();
            txt_Name.Clear();
            dtp_Date.Select();
            rbtn_FemaleSex.Checked = false;
            rbtn_MaleSex.Checked = true;
            chk_Online.Checked = false;
            txt_Account.Focus();
            }
        }
    }
    
