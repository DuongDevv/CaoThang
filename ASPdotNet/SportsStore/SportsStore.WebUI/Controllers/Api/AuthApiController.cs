using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SportsStore.Infrastructure.Services;
using SportsStore.WebUI.Models.Api;

namespace SportsStore.WebUI.Controllers.Api
{
    [ApiController]
    [Route("api/v1/auth")]
    public class AuthApiController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly IJwtTokenService _tokenService;

        public AuthApiController(UserManager<IdentityUser> userManager, IJwtTokenService tokenService)
        {
            _userManager = userManager;
            _tokenService = tokenService;
        }

        /// <summary>
        /// Đăng nhập cấp phát JWT Token (Bài 11)
        /// </summary>
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] ApiLoginRequestDto request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = await _userManager.FindByNameAsync(request.Username);
            if (user == null || !await _userManager.CheckPasswordAsync(user, request.Password))
            {
                return Unauthorized(new { message = "Username hoặc Password không đúng." });
            }

            var roles = await _userManager.GetRolesAsync(user);
            string token = _tokenService.GenerateToken(user, roles);

            return Ok(new ApiLoginResponseDto
            {
                Token = token,
                Username = user.UserName ?? string.Empty,
                Roles = roles
            });
        }
    }
}
