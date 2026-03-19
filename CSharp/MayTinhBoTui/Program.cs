using System;
using System.Windows.Forms;

namespace MayTinhBoTui
{
    static class Program
    {
        [STAThread]
        static void Main()
        {
            ApplicationConfiguration.Initialize();
            // Đảm bảo khởi tạo đúng Class Form1 trong file Form1.cs
            Application.Run(new Form1()); 
        }
    }
}