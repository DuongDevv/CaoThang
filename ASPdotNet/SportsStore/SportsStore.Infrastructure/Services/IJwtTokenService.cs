using System.Collections.Generic;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;

namespace SportsStore.Infrastructure.Services
{
    public interface IJwtTokenService
    {
        string GenerateToken(IdentityUser user, IList<string> roles);
    }
}
