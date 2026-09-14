using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SportsStore.WebUI.Models.Api
{
    public class ApiLoginRequestDto
    {
        [Required(ErrorMessage = "Username không được để trống")]
        public string Username { get; set; } = string.Empty;

        [Required(ErrorMessage = "Password không được để trống")]
        public string Password { get; set; } = string.Empty;
    }

    public class ApiLoginResponseDto
    {
        public string Token { get; set; } = string.Empty;
        public string Username { get; set; } = string.Empty;
        public IList<string> Roles { get; set; } = new List<string>();
    }
}
