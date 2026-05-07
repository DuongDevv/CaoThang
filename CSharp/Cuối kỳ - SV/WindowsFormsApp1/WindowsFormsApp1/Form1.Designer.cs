namespace WindowsFormsApp1
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
            this.dgvListProduct = new System.Windows.Forms.DataGridView();
            this.btnReset = new System.Windows.Forms.Button();
            this.btnEdit = new System.Windows.Forms.Button();
            this.btnAdd = new System.Windows.Forms.Button();
            this.picProductImage = new System.Windows.Forms.PictureBox();
            this.txtDescrip = new System.Windows.Forms.RichTextBox();
            this.cboProductType = new System.Windows.Forms.ComboBox();
            this.cboSupplier = new System.Windows.Forms.ComboBox();
            this.txtProductName = new System.Windows.Forms.TextBox();
            this.txtPrice = new System.Windows.Forms.TextBox();
            this.txtID = new System.Windows.Forms.TextBox();
            this.label7 = new System.Windows.Forms.Label();
            this.label6 = new System.Windows.Forms.Label();
            this.label5 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.groupBox1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.dgvListProduct)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picProductImage)).BeginInit();
            this.SuspendLayout();
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.dgvListProduct);
            this.groupBox1.Controls.Add(this.btnReset);
            this.groupBox1.Controls.Add(this.btnEdit);
            this.groupBox1.Controls.Add(this.btnAdd);
            this.groupBox1.Controls.Add(this.picProductImage);
            this.groupBox1.Controls.Add(this.txtDescrip);
            this.groupBox1.Controls.Add(this.cboProductType);
            this.groupBox1.Controls.Add(this.cboSupplier);
            this.groupBox1.Controls.Add(this.txtProductName);
            this.groupBox1.Controls.Add(this.txtPrice);
            this.groupBox1.Controls.Add(this.txtID);
            this.groupBox1.Controls.Add(this.label7);
            this.groupBox1.Controls.Add(this.label6);
            this.groupBox1.Controls.Add(this.label5);
            this.groupBox1.Controls.Add(this.label4);
            this.groupBox1.Controls.Add(this.label3);
            this.groupBox1.Controls.Add(this.label2);
            this.groupBox1.Font = new System.Drawing.Font("Segoe UI Semibold", 8.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.groupBox1.Location = new System.Drawing.Point(12, 64);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(922, 564);
            this.groupBox1.TabIndex = 0;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "Chi tiết";
            // 
            // dgvListProduct
            // 
            this.dgvListProduct.BackgroundColor = System.Drawing.Color.White;
            this.dgvListProduct.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dgvListProduct.Location = new System.Drawing.Point(0, 282);
            this.dgvListProduct.Name = "dgvListProduct";
            this.dgvListProduct.Size = new System.Drawing.Size(922, 282);
            this.dgvListProduct.TabIndex = 16;
            this.dgvListProduct.CellClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.dgvListProduct_CellClick);
            // 
            // btnReset
            // 
            this.btnReset.Image = global::WindowsFormsApp1.Properties.Resources.reset;
            this.btnReset.ImageAlign = System.Drawing.ContentAlignment.BottomLeft;
            this.btnReset.Location = new System.Drawing.Point(737, 235);
            this.btnReset.Name = "btnReset";
            this.btnReset.Size = new System.Drawing.Size(79, 41);
            this.btnReset.TabIndex = 15;
            this.btnReset.Text = "Reset";
            this.btnReset.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            this.btnReset.UseVisualStyleBackColor = true;
            this.btnReset.Click += new System.EventHandler(this.btnReset_Click);
            // 
            // btnEdit
            // 
            this.btnEdit.Image = global::WindowsFormsApp1.Properties.Resources.edit;
            this.btnEdit.ImageAlign = System.Drawing.ContentAlignment.BottomLeft;
            this.btnEdit.Location = new System.Drawing.Point(631, 235);
            this.btnEdit.Name = "btnEdit";
            this.btnEdit.Size = new System.Drawing.Size(69, 41);
            this.btnEdit.TabIndex = 14;
            this.btnEdit.Text = "Sửa";
            this.btnEdit.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            this.btnEdit.UseVisualStyleBackColor = true;
            this.btnEdit.Click += new System.EventHandler(this.btnEdit_Click);
            // 
            // btnAdd
            // 
            this.btnAdd.Image = global::WindowsFormsApp1.Properties.Resources.add;
            this.btnAdd.ImageAlign = System.Drawing.ContentAlignment.BottomLeft;
            this.btnAdd.Location = new System.Drawing.Point(521, 235);
            this.btnAdd.Name = "btnAdd";
            this.btnAdd.Size = new System.Drawing.Size(78, 41);
            this.btnAdd.TabIndex = 13;
            this.btnAdd.Text = "Thêm";
            this.btnAdd.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            this.btnAdd.UseVisualStyleBackColor = true;
            this.btnAdd.Click += new System.EventHandler(this.btnAdd_Click);
            // 
            // picProductImage
            // 
            this.picProductImage.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.picProductImage.Location = new System.Drawing.Point(707, 37);
            this.picProductImage.Name = "picProductImage";
            this.picProductImage.Size = new System.Drawing.Size(175, 157);
            this.picProductImage.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.picProductImage.TabIndex = 12;
            this.picProductImage.TabStop = false;
            this.picProductImage.Click += new System.EventHandler(this.picProductImage_Click);
            // 
            // txtDescrip
            // 
            this.txtDescrip.Location = new System.Drawing.Point(504, 134);
            this.txtDescrip.Name = "txtDescrip";
            this.txtDescrip.Size = new System.Drawing.Size(163, 96);
            this.txtDescrip.TabIndex = 11;
            this.txtDescrip.Text = "";
            // 
            // cboProductType
            // 
            this.cboProductType.FormattingEnabled = true;
            this.cboProductType.Location = new System.Drawing.Point(504, 88);
            this.cboProductType.Name = "cboProductType";
            this.cboProductType.Size = new System.Drawing.Size(163, 21);
            this.cboProductType.TabIndex = 10;
            // 
            // cboSupplier
            // 
            this.cboSupplier.FormattingEnabled = true;
            this.cboSupplier.Location = new System.Drawing.Point(99, 134);
            this.cboSupplier.Name = "cboSupplier";
            this.cboSupplier.Size = new System.Drawing.Size(163, 21);
            this.cboSupplier.TabIndex = 9;
            // 
            // txtProductName
            // 
            this.txtProductName.Location = new System.Drawing.Point(504, 37);
            this.txtProductName.Name = "txtProductName";
            this.txtProductName.Size = new System.Drawing.Size(163, 22);
            this.txtProductName.TabIndex = 8;
            // 
            // txtPrice
            // 
            this.txtPrice.Location = new System.Drawing.Point(99, 88);
            this.txtPrice.Name = "txtPrice";
            this.txtPrice.Size = new System.Drawing.Size(163, 22);
            this.txtPrice.TabIndex = 7;
            this.txtPrice.KeyPress += new System.Windows.Forms.KeyPressEventHandler(this.txtPrice_KeyPress);
            // 
            // txtID
            // 
            this.txtID.Location = new System.Drawing.Point(99, 37);
            this.txtID.Name = "txtID";
            this.txtID.Size = new System.Drawing.Size(163, 22);
            this.txtID.TabIndex = 6;
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Location = new System.Drawing.Point(434, 137);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(40, 13);
            this.label7.TabIndex = 5;
            this.label7.Text = "Mô tả:";
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Location = new System.Drawing.Point(434, 88);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(52, 13);
            this.label6.TabIndex = 4;
            this.label6.Text = "Loại sữa:";
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Location = new System.Drawing.Point(434, 40);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(42, 13);
            this.label5.TabIndex = 3;
            this.label5.Text = "Tên SP:";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(33, 137);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(46, 13);
            this.label4.TabIndex = 2;
            this.label4.Text = "Nhà SX:";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(33, 88);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(49, 13);
            this.label3.TabIndex = 1;
            this.label3.Text = "Giá bán:";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(33, 40);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(41, 13);
            this.label2.TabIndex = 0;
            this.label2.Text = "Mã SP:";
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Segoe UI", 15.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.ForeColor = System.Drawing.Color.Blue;
            this.label1.Location = new System.Drawing.Point(353, 31);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(274, 30);
            this.label1.TabIndex = 0;
            this.label1.Text = "QUẢN LÝ SẢN PHẨM SỮA";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(936, 640);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.groupBox1);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.dgvListProduct)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picProductImage)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.PictureBox picProductImage;
        private System.Windows.Forms.RichTextBox txtDescrip;
        private System.Windows.Forms.ComboBox cboProductType;
        private System.Windows.Forms.ComboBox cboSupplier;
        private System.Windows.Forms.TextBox txtProductName;
        private System.Windows.Forms.TextBox txtPrice;
        private System.Windows.Forms.TextBox txtID;
        private System.Windows.Forms.Label label7;
        private System.Windows.Forms.Label label6;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.DataGridView dgvListProduct;
        private System.Windows.Forms.Button btnReset;
        private System.Windows.Forms.Button btnEdit;
        private System.Windows.Forms.Button btnAdd;
    }
}

