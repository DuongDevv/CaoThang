using System.Text.Json;
using Microsoft.AspNetCore.Http;

namespace SportsStore.WebUI.Infrastructure;

public static class SessionExtensions
{
    // Lưu một Object bất kỳ vào Session dưới dạng chuỗi JSON
    public static void SetJson(this ISession session, string key, object value)
    {
        session.SetString(key, JsonSerializer.Serialize(value));
    }

    // Đọc chuỗi JSON từ Session và chuyển ngược lại thành Object kiểu T
    public static T? GetJson<T>(this ISession session, string key)
    {
        var sessionData = session.GetString(key);
        return sessionData == null
            ? default(T)
            : JsonSerializer.Deserialize<T>(sessionData);
    }
}