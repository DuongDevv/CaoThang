# Stage 1: Build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy project files and restore dependencies (Optimizing layer caching)
COPY ["SportsStore.Domain/SportsStore.Domain.csproj", "SportsStore.Domain/"]
COPY ["SportsStore.Infrastructure/SportsStore.Infrastructure.csproj", "SportsStore.Infrastructure/"]
COPY ["SportsStore.WebUI/SportsStore.WebUI.csproj", "SportsStore.WebUI/"]

RUN dotnet restore "SportsStore.WebUI/SportsStore.WebUI.csproj"

# Copy source code and build
COPY . .
WORKDIR "/src/SportsStore.WebUI"
RUN dotnet build "SportsStore.WebUI.csproj" -c Release -o /app/build

# Stage 2: Publish stage
FROM build AS publish
RUN dotnet publish "SportsStore.WebUI.csproj" -c Release -o /app/publish /p:UseAppHost=false

# Stage 3: Runtime stage (Lightweight image)
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

# Create non-root user for enterprise security standards
USER app

COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SportsStore.WebUI.dll"]
