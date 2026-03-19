namespace main
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.btn_Replace = new System.Windows.Forms.Button();
            this.btn_Fix = new System.Windows.Forms.Button();
            this.btn_Delete = new System.Windows.Forms.Button();
            this.btn_Add = new System.Windows.Forms.Button();
            this.chk_Online = new System.Windows.Forms.CheckBox();
            this.rbtn_FemaleSex = new System.Windows.Forms.RadioButton();
            this.rbtn_MaleSex = new System.Windows.Forms.RadioButton();
            this.dtp_Date = new System.Windows.Forms.DateTimePicker();
            this.txt_Name = new System.Windows.Forms.TextBox();
            this.txt_Account = new System.Windows.Forms.TextBox();
            this.label5 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.lstV_Table = new System.Windows.Forms.ListView();
            this.cl_Account = ((System.Windows.Forms.ColumnHeader)(new System.Windows.Forms.ColumnHeader()));
            this.cl_Name = ((System.Windows.Forms.ColumnHeader)(new System.Windows.Forms.ColumnHeader()));
            this.cl_Date = ((System.Windows.Forms.ColumnHeader)(new System.Windows.Forms.ColumnHeader()));
            this.cl_Sex = ((System.Windows.Forms.ColumnHeader)(new System.Windows.Forms.ColumnHeader()));
            this.cl_State = ((System.Windows.Forms.ColumnHeader)(new System.Windows.Forms.ColumnHeader()));
            this.groupBox1.SuspendLayout();
            this.SuspendLayout();
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.btn_Replace);
            this.groupBox1.Controls.Add(this.btn_Fix);
            this.groupBox1.Controls.Add(this.btn_Delete);
            this.groupBox1.Controls.Add(this.btn_Add);
            this.groupBox1.Controls.Add(this.chk_Online);
            this.groupBox1.Controls.Add(this.rbtn_FemaleSex);
            this.groupBox1.Controls.Add(this.rbtn_MaleSex);
            this.groupBox1.Controls.Add(this.dtp_Date);
            this.groupBox1.Controls.Add(this.txt_Name);
            this.groupBox1.Controls.Add(this.txt_Account);
            this.groupBox1.Controls.Add(this.label5);
            this.groupBox1.Controls.Add(this.label4);
            this.groupBox1.Controls.Add(this.label3);
            this.groupBox1.Controls.Add(this.label2);
            this.groupBox1.Controls.Add(this.label1);
            this.groupBox1.Location = new System.Drawing.Point(28, 19);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(482, 181);
            this.groupBox1.TabIndex = 0;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "Thông tin chi tiết";
            this.groupBox1.Enter += new System.EventHandler(this.groupBox1_Enter);
            // 
            // btn_Replace
            // 
            this.btn_Replace.Image = global::main.Properties.Resources.icons8_replace_24;
            this.btn_Replace.Location = new System.Drawing.Point(410, 128);
            this.btn_Replace.Name = "btn_Replace";
            this.btn_Replace.Size = new System.Drawing.Size(45, 28);
            this.btn_Replace.TabIndex = 13;
            this.btn_Replace.UseVisualStyleBackColor = true;
            this.btn_Replace.Click += new System.EventHandler(this.btn_Replace_Click);
            // 
            // btn_Fix
            // 
            this.btn_Fix.Image = global::main.Properties.Resources.icons8_fix_50;
            this.btn_Fix.Location = new System.Drawing.Point(410, 53);
            this.btn_Fix.Name = "btn_Fix";
            this.btn_Fix.Size = new System.Drawing.Size(45, 32);
            this.btn_Fix.TabIndex = 12;
            this.btn_Fix.UseVisualStyleBackColor = true;
            this.btn_Fix.Click += new System.EventHandler(this.btn_Fix_Click);
            // 
            // btn_Delete
            // 
            this.btn_Delete.Image = global::main.Properties.Resources.icons8_delete_100;
            this.btn_Delete.Location = new System.Drawing.Point(410, 91);
            this.btn_Delete.Name = "btn_Delete";
            this.btn_Delete.Size = new System.Drawing.Size(45, 32);
            this.btn_Delete.TabIndex = 11;
            this.btn_Delete.UseVisualStyleBackColor = true;
            this.btn_Delete.Click += new System.EventHandler(this.btn_Delete_Click);
            // 
            // btn_Add
            // 
            this.btn_Add.Image = global::main.Properties.Resources.icons8_plus_50;
            this.btn_Add.Location = new System.Drawing.Point(410, 15);
            this.btn_Add.Name = "btn_Add";
            this.btn_Add.Size = new System.Drawing.Size(45, 32);
            this.btn_Add.TabIndex = 10;
            this.btn_Add.UseVisualStyleBackColor = true;
            this.btn_Add.Click += new System.EventHandler(this.btn_Add_Click);
            // 
            // chk_Online
            // 
            this.chk_Online.AutoSize = true;
            this.chk_Online.Location = new System.Drawing.Point(117, 145);
            this.chk_Online.Name = "chk_Online";
            this.chk_Online.Size = new System.Drawing.Size(74, 17);
            this.chk_Online.TabIndex = 9;
            this.chk_Online.Text = "Trạng thái";
            this.chk_Online.UseVisualStyleBackColor = true;
            // 
            // rbtn_FemaleSex
            // 
            this.rbtn_FemaleSex.AutoSize = true;
            this.rbtn_FemaleSex.Location = new System.Drawing.Point(254, 120);
            this.rbtn_FemaleSex.Name = "rbtn_FemaleSex";
            this.rbtn_FemaleSex.Size = new System.Drawing.Size(39, 17);
            this.rbtn_FemaleSex.TabIndex = 8;
            this.rbtn_FemaleSex.TabStop = true;
            this.rbtn_FemaleSex.Text = "Nữ";
            this.rbtn_FemaleSex.UseVisualStyleBackColor = true;
            // 
            // rbtn_MaleSex
            // 
            this.rbtn_MaleSex.AutoSize = true;
            this.rbtn_MaleSex.Location = new System.Drawing.Point(117, 120);
            this.rbtn_MaleSex.Name = "rbtn_MaleSex";
            this.rbtn_MaleSex.Size = new System.Drawing.Size(47, 17);
            this.rbtn_MaleSex.TabIndex = 7;
            this.rbtn_MaleSex.TabStop = true;
            this.rbtn_MaleSex.Text = "Nam";
            this.rbtn_MaleSex.UseVisualStyleBackColor = true;
            // 
            // dtp_Date
            // 
            this.dtp_Date.Location = new System.Drawing.Point(117, 90);
            this.dtp_Date.Name = "dtp_Date";
            this.dtp_Date.Size = new System.Drawing.Size(200, 20);
            this.dtp_Date.TabIndex = 6;
            // 
            // txt_Name
            // 
            this.txt_Name.Location = new System.Drawing.Point(117, 59);
            this.txt_Name.Name = "txt_Name";
            this.txt_Name.Size = new System.Drawing.Size(200, 20);
            this.txt_Name.TabIndex = 5;
            // 
            // txt_Account
            // 
            this.txt_Account.Location = new System.Drawing.Point(117, 27);
            this.txt_Account.Name = "txt_Account";
            this.txt_Account.Size = new System.Drawing.Size(200, 20);
            this.txt_Account.TabIndex = 1;
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Location = new System.Drawing.Point(22, 149);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(58, 13);
            this.label5.TabIndex = 4;
            this.label5.Text = "Trạng thái:";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(30, 124);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(50, 13);
            this.label4.TabIndex = 3;
            this.label4.Text = "Giới tính:";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(23, 90);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(57, 13);
            this.label3.TabIndex = 2;
            this.label3.Text = "Ngày sinh:";
            this.label3.Click += new System.EventHandler(this.label3_Click);
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(38, 59);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(42, 13);
            this.label2.TabIndex = 1;
            this.label2.Text = "Họ tên:";
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(22, 30);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(58, 13);
            this.label1.TabIndex = 0;
            this.label1.Text = "Tài khoản:";
            // 
            // lstV_Table
            // 
            this.lstV_Table.CausesValidation = false;
            this.lstV_Table.Columns.AddRange(new System.Windows.Forms.ColumnHeader[] {
            this.cl_Account,
            this.cl_Name,
            this.cl_Date,
            this.cl_Sex,
            this.cl_State});
            this.lstV_Table.GridLines = true;
            this.lstV_Table.HideSelection = false;
            this.lstV_Table.Location = new System.Drawing.Point(28, 206);
            this.lstV_Table.Name = "lstV_Table";
            this.lstV_Table.Size = new System.Drawing.Size(482, 217);
            this.lstV_Table.TabIndex = 1;
            this.lstV_Table.UseCompatibleStateImageBehavior = false;
            this.lstV_Table.View = System.Windows.Forms.View.Details;
            this.lstV_Table.SelectedIndexChanged += new System.EventHandler(this.listView1_SelectedIndexChanged);
            // 
            // cl_Account
            // 
            this.cl_Account.Text = "Tài khoản";
            this.cl_Account.Width = 82;
            // 
            // cl_Name
            // 
            this.cl_Name.Text = "Họ tên";
            this.cl_Name.Width = 151;
            // 
            // cl_Date
            // 
            this.cl_Date.Text = "Ngày sinh";
            this.cl_Date.Width = 124;
            // 
            // cl_Sex
            // 
            this.cl_Sex.Text = "Giới tính";
            // 
            // cl_State
            // 
            this.cl_State.Text = "Trạng thái";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(522, 452);
            this.Controls.Add(this.lstV_Table);
            this.Controls.Add(this.groupBox1);
            this.Name = "Form1";
            this.Text = "Quản lí tài khoản";
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.CheckBox chk_Online;
        private System.Windows.Forms.RadioButton rbtn_FemaleSex;
        private System.Windows.Forms.RadioButton rbtn_MaleSex;
        private System.Windows.Forms.DateTimePicker dtp_Date;
        private System.Windows.Forms.TextBox txt_Name;
        private System.Windows.Forms.TextBox txt_Account;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.Button btn_Replace;
        private System.Windows.Forms.Button btn_Fix;
        private System.Windows.Forms.Button btn_Delete;
        private System.Windows.Forms.Button btn_Add;
        private System.Windows.Forms.ListView lstV_Table;
        private System.Windows.Forms.ColumnHeader cl_Account;
        private System.Windows.Forms.ColumnHeader cl_Name;
        private System.Windows.Forms.ColumnHeader cl_Date;
        private System.Windows.Forms.ColumnHeader cl_Sex;
        private System.Windows.Forms.ColumnHeader cl_State;
    }
}

