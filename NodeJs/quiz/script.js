const questions = [
 {
    "q": "Node.js được định nghĩa chính xác nhất là gì trong hệ sinh thái phát triển phần mềm?",
    "opts": [
      "Node.js là một môi trường thực thi (runtime environment) cho phép chạy mã JavaScript bên ngoài trình duyệt, dựa trên công cụ V8 Engine và thư viện Libuv.",
      "Node.js là một thư viện JavaScript phía máy chủ được thiết kế để hỗ trợ việc xây dựng các giao diện người dùng phức tạp và quản lý trạng thái ứng dụng web.",
      "Node.js là một ngôn ngữ lập trình độc lập được xây dựng dựa trên cú pháp của JavaScript nhưng bổ sung thêm các tính năng xử lý hệ thống tệp và mạng.",
      "Node.js là một khung làm việc (framework) chuyên dụng cho các ứng dụng web quy mô lớn, cung cấp sẵn các cấu trúc thư mục và quy tắc lập trình nghiêm ngặt."
    ],
    "chapter": "Chương 1: Giới thiệu về Node.js",
    "ans": 0
  },
  {
    "q": "Thành phần V8 Engine trong kiến trúc của Node.js đóng vai trò quan trọng như thế nào?",
    "opts": [
      "V8 Engine là bộ phận thực thi mã nguồn, chịu trách nhiệm biên dịch trực tiếp mã JavaScript sang mã máy (machine code) để đạt hiệu suất xử lý cực cao.",
      "V8 Engine hoạt động như một trình quản lý bộ nhớ, chịu trách nhiệm thu gom rác và tối ưu hóa tài nguyên phần cứng khi ứng dụng Node.js đang chạy.",
      "V8 Engine đóng vai trò là một lớp bảo mật trung gian, giúp ngăn chặn các cuộc tấn công từ bên ngoài vào hệ thống tập tin của máy chủ thông qua mã JavaScript.",
      "V8 Engine là thư viện chính cung cấp các hàm xử lý vào/ra (I/O) và quản lý vòng lặp sự kiện giúp Node.js xử lý được nhiều kết nối đồng thời."
    ],
    "chapter": "Chương 1: Giới thiệu về Node.js",
    "ans": 0
  },
  {
    "q": "Đặc điểm 'Non-blocking I/O' (Vào/Ra không chặn) của Node.js được hiểu như thế nào?",
    "opts": [
      "Luồng chính của ứng dụng sẽ tiếp tục xử lý các đoạn mã lệnh khác trong khi các tác vụ vào/ra (như truy vấn cơ sở dữ liệu) đang được thực hiện ngầm.",
      "Hệ thống sẽ tạm dừng mọi tiến trình thực thi khác để dồn toàn bộ tài nguyên xử lý cho đến khi một tác vụ đọc/ghi dữ liệu cụ thể hoàn thành toàn bộ.",
      "Node.js sẽ tự động tạo ra một luồng xử lý mới (new thread) cho mỗi yêu cầu vào/ra để đảm bảo rằng không có yêu cầu nào phải chờ đợi yêu cầu nào.",
      "Hệ thống sẽ chặn tất cả các yêu cầu kết nối mới từ phía người dùng nếu các tác vụ xử lý dữ liệu hiện tại chưa gửi trả kết quả phản hồi cuối cùng."
    ],
    "chapter": "Chương 1: Giới thiệu về Node.js",
    "ans": 0
  },
  {
    "q": "Vai trò của thư viện Libuv trong kiến trúc hệ thống của Node.js là gì?",
    "opts": [
      "Libuv cung cấp giao diện lập trình ứng dụng (API) để tương tác với các công cụ phát triển giao diện người dùng và quản lý mã nguồn trên nền tảng đám mây.",
      "Libuv là thư viện C++ cung cấp cơ chế vòng lặp sự kiện (Event Loop) và quản lý các nhóm luồng (thread pool) để xử lý các tác vụ bất đồng bộ phía dưới.",
      "Libuv chịu trách nhiệm quản lý các gói phụ thuộc và thư viện bên ngoài, đảm bảo rằng các phiên bản của chúng luôn tương thích với phiên bản Node.js hiện tại.",
      "Libuv hoạt động như một trình thông dịch mã nguồn, giúp chuyển đổi các cú pháp JavaScript hiện đại sang các phiên bản cũ hơn để đảm bảo tính tương thích."
    ],
    "chapter": "Chương 1: Giới thiệu về Node.js",
    "ans": 1
  },
  {
    "q": "Mô hình luồng (threading model) của Node.js hoạt động theo nguyên lý nào?",
    "opts": [
      "Node.js hoạt động bằng cách phân phối các tác vụ đồng đều trên tất cả các luồng có sẵn của CPU để đảm bảo hiệu suất tính toán toán học là cao nhất.",
      "Node.js hoạt động dựa trên mô hình đơn luồng (single-thread) cho vòng lặp sự kiện chính, kết hợp với cơ chế bất đồng bộ để xử lý nhiều yêu cầu cùng lúc.",
      "Node.js sử dụng mô hình hai luồng song song, trong đó một luồng chuyên trách việc nhận dữ liệu từ người dùng và một luồng chuyên trách việc gửi dữ liệu đi.",
      "Node.js sử dụng mô hình đa luồng (multi-threading) truyền thống, nơi mỗi yêu cầu của khách hàng sẽ được phục vụ bởi một luồng CPU riêng biệt và độc lập."
    ],
    "chapter": "Chương 1: Giới thiệu về Node.js",
    "ans": 1
  },
  {
    "q": "Khi một tính năng trong Node.js được đánh dấu là 'Experimental', bạn nên hiểu điều đó như thế nào?",
    "opts": [
      "Tính năng này là một phần của phiên bản trả phí hoặc phiên bản dành cho doanh nghiệp, yêu cầu người dùng phải đăng ký tài khoản mới có quyền truy cập.",
      "Tính năng này vẫn đang trong quá trình phát triển và hoàn thiện, cấu trúc của nó có thể thay đổi hoặc bị loại bỏ hoàn toàn trong các phiên bản cập nhật tới.",
      "Tính năng này đã đạt đến độ ổn định tối đa, được khuyến khích sử dụng rộng rãi trong tất cả các dự án thực tế để thay thế cho các phương pháp cũ lỗi thời.",
      "Tính năng này chỉ dành riêng cho mục đích học tập và nghiên cứu, nó không có bất kỳ ảnh hưởng nào đến hiệu suất thực tế của ứng dụng khi triển khai."
    ],
    "chapter": "Chương 1: Giới thiệu về Node.js",
    "ans": 1
  },
  {
    "q": "Node.js là lựa chọn tối ưu nhất cho kịch bản phát triển ứng dụng nào sau đây?",
    "opts": [
      "Thiết kế các phần mềm hệ thống yêu cầu can thiệp sâu vào cấu trúc phần cứng của máy tính hoặc quản lý các driver thiết bị ngoại vi trên các hệ điều hành.",
      "Phát triển các phần mềm thực hiện các phép toán khoa học phức tạp hoặc xử lý video dung lượng lớn vốn đòi hỏi tài nguyên CPU tập trung và liên tục.",
      "Xây dựng các ứng dụng thời gian thực (real-time) như hệ thống tin nhắn tức thời, bảng tin chứng khoán hoặc các trò chơi trực tuyến có nhiều người chơi.",
      "Tạo ra các ứng dụng văn phòng ngoại tuyến có giao diện đồ họa nặng và không yêu cầu bất kỳ kết nối mạng hay khả năng xử lý dữ liệu từ xa nào."
    ],
    "chapter": "Chương 1: Giới thiệu về Node.js",
    "ans": 2
  },
  {
    "q": "Đối tượng 'global' trong môi trường Node.js có đặc điểm gì khác biệt?",
    "opts": [
      "Đối tượng global là một thành phần chỉ có trong các mô-đun quản lý cơ sở dữ liệu, dùng để lưu trữ các thông tin kết nối và mật khẩu đăng nhập hệ thống.",
      "Đối tượng global tương đương với đối tượng window trong trình duyệt, nó chứa các biến và hàm có thể truy cập từ bất kỳ đâu trong toàn bộ ứng dụng.",
      "Đối tượng global đóng vai trò là một trình quản lý tiến trình, cho phép lập trình viên theo dõi mức độ tiêu thụ bộ nhớ và CPU của từng tệp tin JavaScript.",
      "Đối tượng global thực chất là một thư viện bên ngoài mà lập trình viên phải cài đặt thông qua công cụ npm trước khi có thể sử dụng các hàm toán học cơ bản."
    ],
    "chapter": "Chương 1: Giới thiệu về Node.js",
    "ans": 1
  },
  {
    "q": "Hệ thống mô-đun CommonJS (CJS) trong Node.js sử dụng cú pháp nào để quản lý mã nguồn?",
    "opts": [
      "CommonJS sử dụng hàm require() để nhập các mô-đun và đối tượng module.exports để xuất các biến hoặc hàm ra bên ngoài cho các tệp khác sử dụng.",
      "CommonJS yêu cầu người dùng phải khai báo tất cả các mô-đun bên trong một tệp cấu hình trung tâm có định dạng JSON trước khi ứng dụng được khởi chạy.",
      "CommonJS sử dụng các từ khóa import và export để thực hiện việc nhập và xuất các thành phần giữa các tệp tin JavaScript theo tiêu chuẩn mới nhất.",
      "CommonJS tự động quét toàn bộ thư mục dự án và nạp tất cả các tệp tin có đuôi .js vào bộ nhớ mà không cần lập trình viên phải viết mã lệnh nạp thủ công."
    ],
    "chapter": "Chương 1: Giới thiệu về Node.js",
    "ans": 0
  },
  {
    "q": "Lợi thế đáng kể nhất khi doanh nghiệp áp dụng Node.js vào quy trình phát triển web là gì?",
    "opts": [
      "Node.js giúp giảm bớt nhu cầu về máy chủ lưu trữ vì nó có khả năng nén dữ liệu cực kỳ mạnh mẽ trước khi gửi đến trình duyệt của người dùng cuối.",
      "Doanh nghiệp có thể tận dụng đội ngũ lập trình viên JavaScript hiện có để phát triển cả phần giao diện (frontend) và phần xử lý logic máy chủ (backend).",
      "Khi sử dụng Node.js, các ứng dụng web sẽ mặc nhiên có khả năng bảo mật tuyệt đối trước mọi loại tấn công mạng mà không cần cài đặt thêm các lớp bảo vệ.",
      "Node.js cung cấp các công cụ tự động hóa việc thiết kế giao diện đồ họa mà không cần lập trình viên phải có kiến thức về ngôn ngữ đánh dấu HTML hay CSS."
    ],
    "chapter": "Chương 1: Giới thiệu về Node.js",
    "ans": 1
  },
  {
    "q": "Tại sao công cụ nvm (Node Version Manager) được coi là thiết yếu cho lập trình viên Node.js?",
    "opts": [
      "nvm là một trình soạn thảo mã nguồn chuyên dụng giúp tự động hoàn thành các đoạn mã lệnh Node.js phức tạp và kiểm tra lỗi cú pháp theo thời gian thực.",
      "nvm giúp tăng tốc độ tải các gói thư viện từ máy chủ npm bằng cách tìm kiếm các bản sao lưu (mirrors) gần nhất với vị trí địa lý của người dùng.",
      "nvm cho phép cài đặt, quản lý và chuyển đổi qua lại giữa nhiều phiên bản Node.js khác nhau trên cùng một máy tính để phù hợp với từng dự án cụ thể.",
      "nvm cung cấp một môi trường ảo hóa an toàn để chạy ứng dụng Node.js mà không lo ngại về việc mã độc gây ảnh hưởng đến hệ điều hành của máy chủ."
    ],
    "chapter": "Chương 1: Giới thiệu về Node.js",
    "ans": 2
  },
  {
    "q": "Để kiểm tra xem Node.js đã được cài đặt thành công và biết phiên bản cụ thể, bạn dùng lệnh nào?",
    "opts": [
      "Bạn cần mở cửa sổ dòng lệnh và nhập lệnh node --check để hệ thống thực hiện quét toàn bộ các tệp tin thực thi và hiển thị trạng thái hoạt động.",
      "Bạn cần mở trình duyệt web và truy cập vào trang chủ của Node.js, hệ thống sẽ tự động nhận diện và hiển thị phiên bản đang chạy trên máy tính của bạn.",
      "Bạn cần sử dụng lệnh node --version hoặc viết tắt là node -v trong Terminal để nhận được thông tin về số phiên bản hiện tại đang được sử dụng.",
      "Bạn cần truy cập vào thư mục cài đặt phần mềm trên ổ đĩa hệ thống và tìm kiếm tệp tin version.txt để xem các thông số kỹ thuật của phiên bản Node.js."
    ],
    "chapter": "Chương 1: Giới thiệu về Node.js",
    "ans": 2
  },
  {
    "q": "Môi trường REPL (Read-Eval-Print-Loop) trong Node.js phục vụ mục đích chính là gì?",
    "opts": [
      "REPL là một công cụ dùng để đóng gói toàn bộ ứng dụng thành một tệp tin duy nhất nhằm mục đích triển khai lên các dịch vụ lưu trữ đám mây dễ dàng hơn.",
      "REPL là môi trường tương tác dòng lệnh cho phép lập trình viên thử nghiệm nhanh các đoạn mã JavaScript và nhận kết quả phản hồi ngay lập tức.",
      "REPL cung cấp một giao diện đồ họa để người dùng có thể kéo thả các khối mã lệnh và xây dựng logic ứng dụng mà không cần phải viết mã trực tiếp.",
      "REPL là một cơ sở dữ liệu tạm thời được tích hợp sẵn trong Node.js để lưu trữ các thông tin người dùng trong quá trình phát triển và kiểm thử ứng dụng."
    ],
    "chapter": "Chương 1: Giới thiệu về Node.js",
    "ans": 1
  },
  {
    "q": "Cách thức tiêu chuẩn để thoát khỏi phiên làm việc REPL trong Node.js là gì?",
    "opts": [
      "Bạn chỉ cần gõ lệnh .exit vào dòng lệnh hoặc nhấn tổ hợp phím Ctrl+C hai lần liên tiếp để dừng tiến trình và quay lại môi trường dòng lệnh bình thường.",
      "Bạn cần nhập từ khóa stop và nhấn phím Enter, sau đó đợi hệ thống thực hiện việc dọn dẹp bộ nhớ đệm trước khi tiến trình chính thức được đóng lại.",
      "Bạn nhấn phím Escape nhiều lần cho đến khi màn hình dòng lệnh hiển thị thông báo xác nhận thoát, sau đó chọn tùy chọn Yes bằng các phím mũi tên.",
      "Bạn phải sử dụng tổ hợp phím Alt+F4 trên Windows hoặc Cmd+Q trên macOS để đóng toàn bộ cửa sổ ứng dụng Terminal đang thực thi môi trường REPL."
    ],
    "chapter": "Chương 1: Giới thiệu về Node.js",
    "ans": 0
  },
  {
    "q": "Việc sử dụng Chrome DevTools để gỡ lỗi (debug) Node.js mang lại lợi ích gì?",
    "opts": [
      "Nó cung cấp một giao diện gỡ lỗi chuyên nghiệp với khả năng đặt điểm dừng (breakpoints), kiểm tra giá trị của biến và theo dõi ngăn xếp lời gọi hàm.",
      "Nó giúp tự động tối ưu hóa mã nguồn JavaScript bằng cách loại bỏ các đoạn mã dư thừa và nén kích thước tệp tin để ứng dụng chạy nhanh hơn trên Chrome.",
      "Nó cho phép lập trình viên thay đổi giao diện của ứng dụng Node.js một cách trực quan bằng cách chỉnh sửa các thuộc tính CSS trực tiếp trên trình duyệt.",
      "Nó là công cụ duy nhất có thể kết nối với các cơ sở dữ liệu từ xa và hiển thị sơ đồ quan hệ giữa các bảng dữ liệu trong dự án Node.js của bạn."
    ],
    "chapter": "Chương 1: Giới thiệu về Node.js",
    "ans": 0
  },
  {
    "q": "Khi khởi chạy ứng dụng với lệnh \"node --inspect index.js\", trạng thái của Node.js sẽ như thế nào?",
    "opts": [
      "Node.js sẽ chạy tệp tin index.js ở chế độ hiệu suất cao nhất, bằng cách bỏ qua tất cả các đoạn mã lệnh kiểm tra lỗi để ưu tiên tốc độ xử lý tối đa.",
      "Node.js sẽ thực hiện việc kiểm tra toàn diện các lỗ hổng bảo mật trong tệp index.js và đưa ra các cảnh báo về những thư viện đã lỗi thời hoặc nguy hiểm.",
      "Node.js sẽ khởi động ứng dụng và đồng thời mở ra một cổng giao tiếp đặc biệt, cho phép các công cụ gỡ lỗi bên ngoài kết nối vào để theo dõi tiến trình.",
      "Node.js sẽ thực hiện biên dịch tệp tin JavaScript sang một định dạng tệp tin thực thi (.exe) để người dùng có thể chạy trực tiếp trên hệ điều hành Windows."
    ],
    "chapter": "Chương 1: Giới thiệu về Node.js",
    "ans": 2
  },
  {
    "q": "Tại sao việc sử dụng nvm lại giúp tránh được các lỗi liên quan đến quyền truy cập (permission errors)?",
    "opts": [
      "nvm cài đặt các phiên bản Node.js vào thư mục riêng của người dùng thay vì thư mục hệ thống, do đó không yêu cầu quyền sudo hoặc quyền Admin khi sử dụng.",
      "nvm sử dụng một công nghệ mã hóa đặc biệt để vượt qua các lớp bảo mật của hệ điều hành, cho phép thay đổi các tệp tin hệ thống mà không bị ngăn chặn.",
      "nvm tự động cấp quyền quản trị cao nhất (Admin) cho mọi thao tác của người dùng trên hệ thống, giúp việc cài đặt các gói phần mềm luôn diễn ra suôn sẻ.",
      "nvm là một công cụ được phát triển bởi chính Microsoft và Apple nên nó có quyền can thiệp vào các khu vực nhạy cảm của hệ điều hành một cách hợp pháp."
    ],
    "chapter": "Chương 1: Giới thiệu về Node.js",
    "ans": 0
  },
  {
    "q": "Tầm quan trọng của tệp tin \".env\" trong quá trình phát triển ứng dụng Node.js là gì?",
    "opts": [
      "Tệp tin này chứa các đoạn mã HTML và CSS cơ bản để định hình khung giao diện cho ứng dụng trước khi các mô-đun JavaScript chính được nạp vào.",
      "Tệp tin này chứa danh sách toàn bộ các thành viên trong dự án và vai trò của họ để hệ thống tự động phân quyền truy cập vào mã nguồn trên GitHub.",
      "Tệp tin này dùng để lưu trữ các biến môi trường và thông tin nhạy cảm như khóa API hay mật khẩu cơ sở dữ liệu, giúp tách biệt cấu hình với mã nguồn.",
      "Tệp tin này đóng vai trò là một tệp lưu trữ lịch sử các lỗi đã xảy ra trong quá trình ứng dụng vận hành để lập trình viên có thể tra cứu và sửa chữa."
    ],
    "chapter": "Chương 1: Giới thiệu về Node.js",
    "ans": 2
  },
  {
    "q": "Để quản lý hiệu quả mã nguồn và các tác vụ dòng lệnh trong VS Code, phím tắt nào mở Terminal tích hợp?",
    "opts": [
      "Bạn nhấn tổ hợp phím Ctrl + ` (dấu huyền) để bật/tắt nhanh cửa sổ Terminal ngay bên dưới trình soạn thảo, giúp thực hiện các lệnh Node.js thuận tiện.",
      "Bạn phải sử dụng phím tắt Ctrl + T để tạo ra một tab mới trong trình duyệt web, từ đó mới có thể truy cập vào giao diện quản lý dòng lệnh của Node.js.",
      "Bạn sử dụng tổ hợp phím Ctrl + Shift + P để mở bảng lệnh trung tâm, sau đó tìm kiếm chức năng quản lý Terminal từ danh sách các lệnh có sẵn.",
      "Bạn nhấn phím F5 trên bàn phím để kích hoạt trình biên dịch và hệ thống sẽ tự động mở ra một cửa sổ Terminal riêng biệt bên ngoài ứng dụng VS Code."
    ],
    "chapter": "Chương 1: Giới thiệu về Node.js",
    "ans": 0
  },
  {
    "q": "Việc \"Docker hóa\" (Dockerizing) một ứng dụng Node.js nhằm giải quyết vấn đề lớn nhất nào?",
    "opts": [
      "It helps applications run on older computers with weak hardware by re-optimizing Node.js source code.",
      "It ensures the application operates consistently in an isolated environment, eliminating the 'it works on my machine' problem on servers.",
      "It automatically converts JavaScript source code to other languages like Python or Java to increase project diversity.",
      "It provides an extra user interface for command-line apps, allowing non-programmers to use the application."
    ],
    "chapter": "Chương 1: Giới thiệu về Node.js",
    "ans": 1
  },
  {
    "q": "Sự khác biệt chính về phạm vi (scope) giữa \"var\" và \"let\" là gì?",
    "opts": [
      "Biến được khai báo bằng var sẽ có phạm vi hoạt động bên trong một hàm (function-scoped), trong khi đó let bị giới hạn bên trong các khối lệnh (block-scoped).",
      "Biến được khai báo bằng var sẽ có phạm vi hoạt động bên trong các khối lệnh (block-scoped), trong khi đó let lại bị giới hạn phạm vi trong một hàm số.",
      "Biến được khai báo bằng var mặc định sẽ có phạm vi hoạt động toàn cục, trong khi đó let hoàn toàn không có phạm vi hoạt động cụ thể.",
      "Thực tế không có sự khác biệt nào đáng kể về phạm vi giữa var và let."
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 0
  },
  {
    "q": "Điều gì xảy ra khi bạn cố gắng gán lại giá trị cho một biến khai báo bằng \"const\"?",
    "opts": [
      "Giá trị của biến sẽ được hệ thống cập nhật một cách bình thường.",
      "Trình thực thi mã lệnh sẽ tự động bỏ qua lệnh gán mới đó.",
      "Biến sẽ tự động được hệ thống chuyển đổi kiểu dữ liệu sang dạng let.",
      "JavaScript sẽ ném ra một lỗi TypeError nghiêm trọng do hằng số không thể thay đổi liên kết sau khi khởi tạo."
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 3
  },
  {
    "q": "Kết quả của biểu thức \"typeof null\" trong JavaScript là gì?",
    "opts": [
      "Hệ thống sẽ trả về giá trị chuỗi là \"undefined\".",
      "Hệ thống sẽ trả về giá trị chuỗi là \"null\".",
      "Hệ thống sẽ trả về giá trị chuỗi là \"object\" (đây là một lỗi thiết kế lịch sử của JS).",
      "Hệ thống sẽ trả về giá trị chuỗi là \"boolean\"."
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 2
  },
  {
    "q": "Kiểu dữ liệu \"Symbol\" được sử dụng chủ yếu nhằm mục đích gì?",
    "opts": [
      "Tạo ra các định danh duy nhất (unique identifiers) và không thể thay đổi, thường dùng làm khóa cho thuộc tính đối tượng để tránh xung đột.",
      "Đại diện cho các giá trị logic đúng hoặc sai trong các cấu trúc điều kiện phức tạp.",
      "Lưu trữ các chuỗi văn bản có độ dài lớn và chứa nhiều ký tự đặc biệt.",
      "Thực hiện các phép tính toán học đòi hỏi độ chính xác cực cao đối với số thập phân."
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 0
  },
  {
    "q": "Sự khác biệt cốt lõi giữa kiểu dữ liệu \"undefined\" và \"null\" là gì?",
    "opts": [
      "Null có nghĩa là biến chưa gán giá trị, còn Undefined là giá trị rỗng được lập trình viên gán vào.",
      "Undefined có nghĩa là biến chưa được gán giá trị, còn Null là một giá trị rỗng được lập trình viên gán vào một cách có chủ đích.",
      "Cả hai kiểu dữ liệu này thực tế đều giống hệt nhau về cách thức hoạt động.",
      "Undefined dùng cho biến cục bộ, còn Null dùng cho biến toàn cục."
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 1
  },
  {
    "q": "Kiểu dữ liệu \"BigInt\" được thiết kế để sử dụng trong trường hợp nào?",
    "opts": [
      "Lưu trữ các số thập phân có độ chính xác 15 chữ số sau dấu phẩy.",
      "Tối ưu hóa việc quản lý bộ nhớ của mảng chứa số lượng rất lớn các số nguyên nhỏ.",
      "Lưu trữ và thực hiện phép tính với các số nguyên có giá trị rất lớn, vượt quá giới hạn an toàn (Number.MAX_SAFE_INTEGER).",
      "Thực hiện các phép toán logic giữa chuỗi văn bản và con số."
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 2
  },
  {
    "q": "Template Literals (sử dụng dấu backtick `) mang lại ưu điểm gì so với chuỗi thông thường?",
    "opts": [
      "Cho phép nhúng biểu thức (interpolation) và hỗ trợ viết chuỗi trên nhiều dòng mà không cần ký tự nối.",
      "Giúp chuỗi văn bản được thực thi nhanh hơn nhờ cơ chế nén dữ liệu tích hợp của V8.",
      "Tự động mã hóa ký tự đặc biệt để ngăn chặn các cuộc tấn công script injection.",
      "Ràng buộc kiểu dữ liệu của biến nhúng vào chuỗi phải luôn là kiểu string."
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 0
  },
  {
    "q": "Cách thức nào sau đây được dùng để tạo ra một đối tượng (Object) trong JavaScript?",
    "opts": [
      "Sử dụng cặp ngoặc vuông [] bao quanh các cặp khóa và giá trị.",
      "Sử dụng từ khóa new Object() nhưng không được phép chứa giá trị thuộc tính ban đầu.",
      "Sử dụng cặp ngoặc nhọn {} để chứa các cặp thuộc tính và giá trị tương ứng (Object Literal).",
      "Sử dụng cặp ngoặc đơn () để bao quanh các định nghĩa thuộc tính."
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 2
  },
  {
    "q": "Đặc điểm đặc trưng nhất của kiểu dữ liệu tham chiếu (Reference Types) là gì?",
    "opts": [
      "Khi gán biến này cho biến khác, một bản sao dữ liệu độc lập sẽ được hệ thống tạo ra.",
      "Biến chỉ lưu trữ địa chỉ bộ nhớ (pointer) dẫn đến dữ liệu thực tế; nhiều biến có thể cùng trỏ về một vùng dữ liệu.",
      "Giá trị thực tế của biến được lưu trữ trực tiếp tại vị trí ô nhớ mà biến đó quản lý.",
      "Dữ liệu tự động bị xóa khỏi bộ nhớ ngay sau khi không còn được gọi tên."
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 1
  },
  {
    "q": "Cơ chế \"Hoisting\" ảnh hưởng như thế nào đến việc khai báo biến với \"var\"?",
    "opts": [
      "Đẩy cả phần khai báo và phần gán giá trị khởi tạo của biến lên đầu phạm vi chương trình.",
      "Tự động đẩy phần khai báo (declaration) lên đầu phạm vi nhưng giữ nguyên phần gán giá trị (assignment) tại vị trí cũ.",
      "Ngăn cản hành vi sử dụng biến trước khi khai báo bằng cách báo lỗi ReferenceError.",
      "Chuyển đổi tất cả biến var thành hằng số const để đảm bảo an toàn dữ liệu."
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 1
  },
  {
    "q": "Sự khác biệt chính giữa toán tử so sánh 2 dấu bằng \"==\" và 3 dấu bằng \"===\" là gì?",
    "opts": [
      "Toán tử == so sánh cả giá trị và kiểu dữ liệu, còn === chỉ so sánh giá trị.",
      "Toán tử == chỉ so sánh giá trị sau khi ép kiểu (coercion), còn === so sánh nghiêm ngặt cả giá trị và kiểu dữ liệu.",
      "Toán tử == dùng cho số, còn === dùng cho chuỗi văn bản.",
      "Toán tử == nhanh hơn === vì không cần kiểm tra kiểu dữ liệu."
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 1
  },
  {
    "q": "Kết quả của biểu thức \"5\" + 2 trong JavaScript sẽ trả về giá trị nào?",
    "opts": [
      "Số 7 vì JavaScript tự động chuyển chuỗi \"5\" sang định dạng số.",
      "Undefined vì toán tử cộng không hỗ trợ xử lý kiểu dữ liệu khác biệt.",
      "Chuỗi \"52\" vì khi có một toán hạng là chuỗi, JavaScript ưu tiên thực hiện phép nối chuỗi (concatenation).",
      "Báo lỗi cú pháp vì không được cộng chuỗi với số."
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 2
  },
  {
    "q": "Kết quả của biểu thức \"5\" - 2 trong JavaScript sẽ trả về giá trị nào?",
    "opts": [
      "Chuỗi \"5-2\".",
      "Số 3 vì khác với phép cộng, toán tử trừ sẽ buộc JavaScript ép kiểu chuỗi \"5\" sang số để tính toán.",
      "Chuỗi \"3\".",
      "Giá trị NaN (Not a Number)."
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 1
  },
  {
    "q": "Toán tử Logic Nullish Coalescing (??) hoạt động theo nguyên lý nào?",
    "opts": [
      "Trả về vế phải nếu vế trái là 'falsy' (bao gồm 0, false, chuỗi rỗng).",
      "Thực hiện phép AND nghiêm ngặt giữa hai vế.",
      "Trả về vế bên phải chỉ khi vế trái là null hoặc undefined.",
      "Luôn trả về vế trái nếu nó là một đối tượng hoặc mảng hợp lệ."
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 2
  },
  {
    "q": "Kết quả thực tế của phép so sánh \"true == 1\" trong JavaScript là gì?",
    "opts": [
      "False vì một bên là boolean, một bên là number.",
      "True vì trong phép so sánh không nghiêm ngặt, true được ép kiểu thành số 1.",
      "Undefined vì đây là phép so sánh không hợp lệ.",
      "Báo lỗi thực thi nghiêm trọng."
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 1
  },
  {
    "q": "Phép toán so sánh liên tiếp \"5 > 3 > 2\" sẽ trả về kết quả cuối cùng là gì?",
    "opts": [
      "Báo lỗi SyntaxError.",
      "True vì 5 lớn hơn 3 và 3 lớn hơn 2.",
      "False vì 5 > 3 là true (1), sau đó so sánh 1 > 2 kết quả là false.",
      "Số 1."
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 2
  },
  {
    "q": "Toán tử \"spread\" (biểu thị bằng dấu ...) có tác dụng gì khi làm việc với mảng?",
    "opts": [
      "Gộp tất cả các phần tử thành một chuỗi văn bản duy nhất.",
      "Đảo ngược hoàn toàn thứ tự các phần tử trong mảng.",
      "Trải (unpack) các phần tử của mảng vào một mảng mới hoặc danh sách đối số của hàm.",
      "Tự động tìm kiếm và xóa bỏ các phần tử trùng lặp."
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 2
  },
  {
    "q": "Kết quả trả về của biểu thức \"typeof NaN\" trong JavaScript là gì?",
    "opts": [
      "Chuỗi \"NaN\".",
      "Chuỗi \"number\" mặc dù ý nghĩa là 'Not a Number'.",
      "Chuỗi \"string\".",
      "Chuỗi \"undefined\"."
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 1
  },
  {
    "q": "Toán tử \"logical OR\" (||) sẽ trả về giá trị thực tế như thế nào?",
    "opts": [
      "Trả về giá trị 'truthy' đầu tiên hoặc giá trị cuối cùng nếu tất cả đều là 'falsy'.",
      "Luôn trả về boolean true hoặc false.",
      "Trả về giá trị rỗng nếu một vế không chứa dữ liệu chuỗi hoặc số.",
      "Trả về giá trị cuối cùng nếu vế đầu tiên là true."
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 0
  },
  {
    "q": "Kỹ thuật gán giá trị \"Destructuring assignment\" được sử dụng nhằm mục đích gì?",
    "opts": [
      "Phá hủy đối tượng cũ để giải phóng bộ nhớ.",
      "Gộp nhiều biến đơn lẻ thành một đối tượng duy nhất.",
      "Trích xuất dữ liệu trực tiếp từ mảng hoặc đối tượng vào các biến riêng biệt một cách ngắn gọn.",
      "Mã hóa các thuộc tính của đối tượng thành chuỗi bảo mật."
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 2
  },
  {
    "q": "Vòng lặp \"for...in\" có sự khác biệt cốt lõi nào so với vòng lặp \"for...of\"?",
    "opts": [
      "Vòng lặp for...in được dùng để lặp qua các tên thuộc tính (keys) của đối tượng, còn for...of dùng để lặp qua các giá trị thực tế (values) của các đối tượng có thể lặp. [cite: 218]",
      "Vòng lặp for...in chỉ có thể sử dụng cho mảng dữ liệu, còn vòng lặp for...of được thiết kế chuyên biệt chỉ dành cho các đối tượng có định dạng kiểu dữ liệu JSON. [cite: 219]",
      "Vòng lặp for...in chuyên dùng để lặp qua các giá trị thực tế của phần tử, trong khi đó for...of được thiết kế để lặp qua các chỉ số vị trí của mảng dữ liệu. [cite: 220]",
      "Thực tế không có bất kỳ sự khác biệt nào giữa hai loại vòng lặp này. [cite: 221]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 0
  },
  {
    "q": "Những giá trị nào sau đây được JavaScript coi là điều kiện \"falsy\" khi kiểm tra logic?",
    "opts": [
      "Bao gồm các giá trị: false, số 0, chuỗi văn bản rỗng (\"\"), giá trị null, giá trị undefined và giá trị toán học đặc biệt không phải số (NaN). [cite: 223]",
      "Bao gồm tất cả các con số có giá trị âm và các mảng dữ liệu hiện tại không chứa bất kỳ một phần tử dữ liệu thực tế nào bên trong chúng. [cite: 224]",
      "Chỉ bao gồm các biến chưa từng được khai báo trong mã nguồn hoặc các đối tượng phức tạp vừa bị gán lại bằng một giá trị hoàn toàn rỗng. [cite: 225]",
      "Chỉ bao gồm duy nhất giá trị logic là false và giá trị số 0 xuất hiện trong các phép tính toán học của chương trình ứng dụng web. [cite: 226]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 0
  },
  {
    "q": "Lệnh \"break\" thực hiện chức năng gì khi được đặt bên trong một vòng lặp?",
    "opts": [
      "Lệnh này thực hiện việc tạm dừng toàn bộ chương trình và đợi cho đến khi người dùng thực hiện nhấn một phím bất kỳ trên bàn phím. [cite: 228]",
      "Lệnh này sẽ dừng lần lặp hiện tại ngay lập tức và chuyển sang thực hiện lần lặp kế tiếp của chính vòng lặp đó. [cite: 229]",
      "Lệnh này sẽ kết thúc hoàn toàn hoạt động của vòng lặp chứa nó và ngay lập tức chuyển sang thực thi các câu lệnh tiếp theo nằm bên ngoài khối lệnh vòng lặp. [cite: 230]",
      "Lệnh này sẽ thoát khỏi hàm số chứa vòng lặp đó và tự động trả về một giá trị đặc biệt là undefined. [cite: 231]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 2
  },
  {
    "q": "Lệnh \"continue\" thực hiện chức năng gì khi được đặt bên trong một vòng lặp?",
    "opts": [
      "Lệnh này sẽ bỏ qua toàn bộ các câu lệnh còn lại trong lần lặp hiện tại và ngay lập tức bắt đầu một lần lặp mới từ đầu với giá trị điều kiện kế tiếp. [cite: 233]",
      "Lệnh này sẽ thực hiện việc lưu lại toàn bộ trạng thái hiện tại của vòng lặp vào bộ nhớ đệm hệ thống để lập trình viên có thể quay lại sau đó. [cite: 234]",
      "Lệnh này sẽ kết thúc hoàn toàn hoạt động của vòng lặp và đảm bảo rằng không có thêm bất kỳ lần lặp nào khác được thực hiện. [cite: 235]",
      "Lệnh này thực hiện việc tăng tốc độ thực thi của vòng lặp bằng cách bỏ qua tất cả các bước kiểm tra điều kiện logic phức tạp. [cite: 236]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 0
  },
  {
    "q": "Cấu trúc điều khiển \"switch\" thực hiện việc so sánh các trường hợp (cases) theo cách thức nào?",
    "opts": [
      "Cấu trúc này sử dụng cơ chế so sánh lỏng lẻo (toán tử ==) để hệ thống có thể tự động thực hiện việc ép kiểu các giá trị. [cite: 238]",
      "Cấu trúc này sử dụng cơ chế so sánh nghiêm ngặt (toán tử ===) nhằm đảm bảo rằng các giá trị so sánh phải khớp hoàn toàn cả về mặt giá trị lẫn kiểu dữ liệu. ",
      "Cấu trúc này chỉ có khả năng thực hiện việc so sánh các giá trị thuộc kiểu dữ liệu số nguyên. [cite: 240]",
      "Cấu trúc này thực hiện việc so sánh dựa trên tổng độ dài của chuỗi văn bản nếu các trường hợp được định nghĩa là chuỗi. [cite: 241]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 1
  },
  {
    "q": "Vòng lặp \"do...while\" có điểm khác biệt cốt lõi nào so với vòng lặp \"while\" truyền thống?",
    "opts": [
      "Vòng lặp do...while sẽ luôn luôn thực hiện khối lệnh bên trong ít nhất là một lần trước khi tiến hành việc kiểm tra điều kiện. [cite: 243]",
      "Vòng lặp do...while được chứng minh là có tốc độ thực thi nhanh hơn vòng lặp while thông thường. [cite: 244]",
      "Vòng lặp do...while sẽ thực hiện việc kiểm tra điều kiện trước rồi sau đó mới quyết định có thực hiện các câu lệnh bên trong hay không. [cite: 245]",
      "Vòng lặp do...while hoàn toàn không cho phép lập trình viên sử dụng các lệnh điều hướng như break hoặc continue. [cite: 246]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 0
  },
  {
    "q": "Điều gì sẽ xảy ra nếu lập trình viên thiếu lệnh \"break\" trong một khối \"case\" của cấu trúc \"switch\"?",
    "opts": [
      "Chương trình sẽ tiếp tục thực hiện tất cả các câu lệnh có trong các case tiếp theo bất kể điều kiện có khớp hay không cho đến khi gặp lệnh break. [cite: 248]",
      "Toàn bộ chương trình sẽ báo một lỗi cú pháp nghiêm trọng và hệ thống sẽ không thể tiếp tục thực thi đoạn mã switch đó. [cite: 249]",
      "Chương trình ứng dụng sẽ tự động thoát khỏi cấu trúc switch ngay lập tức sau khi đã thực hiện xong các câu lệnh có trong case vừa khớp. [cite: 250]",
      "Chương trình sẽ tự động quay lại thực hiện lại từ case đầu tiên của cấu trúc switch theo một vòng lặp vô tận. [cite: 251]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 0
  },
  {
    "q": "Toán tử Ternary (ba ngôi) thường được sử dụng nhằm mục đích thay thế cho cấu trúc nào?",
    "opts": [
      "Toán tử này được dùng để thay thế cho cấu trúc điều kiện if...else đơn giản, thường dùng để gán nhanh giá trị cho một biến. [cite: 253]",
      "Toán tử này được dùng để thay thế hoàn toàn cho vòng lặp for khi lập trình viên cần thực hiện việc duyệt qua các mảng. [cite: 254]",
      "Toán tử này được dùng để thay thế cho việc phải khai báo các hàm số phức tạp bằng các biểu thức toán học ngắn gọn. [cite: 255]",
      "Toán tử này được dùng để thay thế hoàn toàn cho cấu trúc try...catch khi lập trình viên cần xử lý các lỗi đơn giản. [cite: 256]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 0
  },
  {
    "q": "Các biểu thức nằm trong câu lệnh \"if\" sẽ được hệ thống ép kiểu về dạng nào để kiểm tra?",
    "opts": [
      "Hệ thống sẽ ép kiểu về dạng Number (số) để kiểm tra xem giá trị thực tế của biểu thức đó có khác giá trị số 0 hay không. [cite: 258]",
      "Hệ thống sẽ giữ nguyên kiểu dữ liệu ban đầu của biểu thức và chỉ chấp nhận các biểu thức đã được định dạng sẵn là Boolean. [cite: 259]",
      "Hệ thống sẽ ép kiểu về dạng String (chuỗi) để thực hiện việc so sánh tổng độ dài của nội dung có bên trong biểu thức. [cite: 260]",
      "Hệ thống sẽ ép kiểu về dạng Boolean để xác định xem giá trị của biểu thức đó thuộc nhóm giá trị \"truthy\" hay thuộc nhóm giá trị \"falsy\". [cite: 261]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 3
  },
  {
    "q": "Cách thức phổ biến nhất để lặp qua các thành phần của một đối tượng (Object) thông thường là gì?",
    "opts": [
      "Lập trình viên sử dụng vòng lặp for...in để hệ thống có thể truy cập lần lượt vào các tên thuộc tính (keys) của đối tượng. [cite: 263]",
      "Lập trình viên sử dụng vòng lặp for...of trực tiếp vì đối tượng trong JavaScript mặc định là một kiểu dữ liệu có khả năng lặp được. [cite: 264]",
      "Lập trình viên sử dụng phương thức .forEach() vì phương thức này đã được tích hợp sẵn trên tất cả các đối tượng. [cite: 265]",
      "Lập trình viên sử dụng vòng lặp while kết hợp với một biến chỉ số tăng dần tương tự như cách thức lặp qua các phần tử mảng. [cite: 266]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 0
  },
  {
    "q": "Phương thức \"map()\" của mảng trong JavaScript có đặc điểm đặc trưng nào sau đây?",
    "opts": [
      "Thực hiện việc tính toán và trả về một giá trị duy nhất (ví dụ như tổng số hoặc một chuỗi) từ tất cả các phần tử. [cite: 269]",
      "Sẽ thay đổi trực tiếp các giá trị của mảng cũ dựa trên kết quả trả về của một hàm callback mà không tạo ra vùng nhớ mới. [cite: 270]",
      "Sẽ tạo ra một mảng mới hoàn toàn, trong đó mỗi phần tử là kết quả của việc thực thi hàm callback trên từng phần tử tương ứng của mảng cũ. ",
      "Thực hiện việc loại bỏ tất cả các phần tử không thỏa mãn một điều kiện cụ thể và trả về một mảng mới có kích thước nhỏ hơn. [cite: 272]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 2
  },
  {
    "q": "Phương thức \"filter()\" của mảng thường được lập trình viên sử dụng nhằm mục đích gì?",
    "opts": [
      "Sắp xếp lại toàn bộ các phần tử trong mảng theo một thứ tự tăng dần hoặc giảm dần dựa trên giá trị của các phần tử đó. [cite: 274]",
      "Chèn thêm một phần tử dữ liệu mới vào một vị trí bất kỳ trong mảng mà không gây ra sự mất mát dữ liệu cho các phần tử xung quanh. [cite: 275]",
      "Sẽ trả về một mảng mới chỉ bao gồm các phần tử thỏa mãn được một điều kiện logic nhất định được định nghĩa bên trong hàm callback. ",
      "Tìm kiếm và trả về phần tử dữ liệu đầu tiên được tìm thấy trong mảng mà khớp hoàn toàn với giá trị đã được yêu cầu. [cite: 277]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 2
  },
  {
    "q": "Sự khác biệt chính giữa hai phương thức \"push()\" và \"unshift()\" khi làm việc với mảng là gì?",
    "opts": [
      "Push chỉ được dùng cho các mảng chứa dữ liệu dạng số, trong khi Unshift chỉ được thiết kế để sử dụng cho các mảng chứa dữ liệu chuỗi. [cite: 279]",
      "Push thực hiện thêm phần tử vào vị trí đầu tiên của mảng, trong khi đó Unshift lại thực hiện thêm phần tử vào vị trí cuối cùng của mảng. [cite: 280]",
      "Cả hai đều thực hiện thêm phần tử vào cuối mảng nhưng Push trả về một mảng mới hoàn toàn còn Unshift thì thay đổi trên mảng gốc. [cite: 281]",
      "Push thực hiện thêm phần tử vào vị trí cuối cùng của mảng, trong khi đó Unshift lại thực hiện thêm phần tử mới vào vị trí đầu tiên. [cite: 282]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 3
  },
  {
    "q": "Phương thức \"reduce()\" của mảng thường được áp dụng hiệu quả nhất trong trường hợp nào?",
    "opts": [
      "Áp dụng khi lập trình viên cần thực hiện việc giảm kích thước vật lý của mảng bằng cách xóa bỏ nhanh các phần tử nằm ở vị trí cuối. [cite: 284]",
      "Áp dụng khi lập trình viên cần thực hiện việc lặp qua mảng chỉ để hiển thị dữ liệu ra màn hình giao diện mà không có nhu cầu trả về giá trị. [cite: 285]",
      "Áp dụng khi lập trình viên cần chuyển đổi toàn bộ mảng thành một giá trị đơn nhất hoặc một đối tượng tổng hợp từ dữ liệu tất cả phần tử. [cite: 286]",
      "Áp dụng khi lập trình viên cần thực hiện việc tìm kiếm vị trí chỉ số (index) chính xác của một phần tử dữ liệu cụ thể nào đó. [cite: 287]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 2
  },
  {
    "q": "Cách thức chính xác và an toàn nhất để kiểm tra một biến có phải là kiểu mảng hay không?",
    "opts": [
      "Sử dụng phương thức Array.isArray(variable) để nhận được một kết quả logic đúng hoặc sai về kiểu dữ liệu mảng của biến. [cite: 289]",
      "Sử dụng toán tử so sánh nghiêm ngặt === với một mảng rỗng để xem các giá trị có trùng khớp hoàn toàn hay không. [cite: 290]",
      "Sử dụng toán tử typeof để kiểm tra biến, nếu kết quả trả về là chuỗi văn bản \"array\" thì có thể khẳng định chắc chắn biến đó là mảng. [cite: 291]",
      "Thực hiện kiểm tra xem biến đó có sở hữu thuộc tính .length hay không, nếu có thì hệ thống sẽ mặc định xác định biến đó là mảng. [cite: 292]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 0
  },
  {
    "q": "Làm thế nào để có thể truy cập vào một thuộc tính của đối tượng bằng cách sử dụng một biến động?",
    "opts": [
      "Sử dụng dấu chấm (.) nối trực tiếp đối tượng với tên biến (ví dụ: object.variableName) để hệ thống trỏ đến giá trị thực tế của biến. [cite: 294]",
      "Sử dụng một hàm chuyên dụng có tên là getProperty(object, variableName) đã được tích hợp sẵn trong nhân của JavaScript. [cite: 295]",
      "Sử dụng cặp ngoặc vuông bao quanh tên biến (ví dụ: object[variableName]) để hệ thống có thể tính toán và lấy được tên thuộc tính từ giá trị biến. [cite: 296]",
      "JavaScript hoàn toàn không cho phép việc truy cập thuộc tính thông qua biến, tên thuộc tính bắt buộc phải được viết cố định. [cite: 297]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 2
  },
  {
    "q": "Phương thức \"Object.keys(obj)\" sẽ trả về kết quả cụ thể như thế nào cho người dùng?",
    "opts": [
      "Trả về một mảng bao gồm tất cả các tên thuộc tính (keys) đang tồn tại bên trong đối tượng obj đó dưới định dạng các chuỗi văn bản. [cite: 299]",
      "Trả về một mảng chứa tất cả các giá trị dữ liệu (values) đang hiện có của các thuộc tính được định nghĩa bên trong đối tượng obj. [cite: 300]",
      "Trả về một con số nguyên đại diện cho tổng số lượng tất cả các thuộc tính hiện đang có mặt bên trong cấu trúc dữ liệu của đối tượng. [cite: 301]",
      "Trả về một chuỗi văn bản dài duy nhất bao gồm tất cả các cặp khóa và giá trị của đối tượng được gộp lại với nhau một cách tuần tự. [cite: 302]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 0
  },
  {
    "q": "Cơ chế sao chép \"Shallow copy\" (sao chép nông) bằng spread operator (...) có nhược điểm gì?",
    "opts": [
      "Cơ chế này hoàn toàn không có khả năng thực hiện việc sao chép được các thuộc tính của đối tượng có kiểu dữ liệu cơ bản như chuỗi. [cite: 304]",
      "Cơ chế này sẽ tự động thực hiện việc chuyển đổi tất cả các phương thức của đối tượng thành các biến hằng số tĩnh và không thể thực thi. [cite: 305]",
      "Các đối tượng con nằm lồng bên trong vẫn bị dùng chung địa chỉ vùng nhớ (tham chiếu) với đối tượng gốc, thay đổi ở bản sao sẽ ảnh hưởng tới bản gốc. ",
      "Cơ chế này khiến cho hiệu suất tổng thể của ứng dụng bị sụt giảm đáng kể do hệ thống tiêu tốn quá nhiều tài nguyên cho việc nhân bản. [cite: 307]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 2
  },
  {
    "q": "Phương thức \"splice()\" của mảng trong JavaScript được sử dụng để làm gì?",
    "opts": [
      "Phương thức này chỉ được thiết kế để phục vụ duy nhất cho mục đích nối hai mảng dữ liệu lại với nhau thành một mảng mới. [cite: 309]",
      "Dùng để thêm mới, xóa bỏ hoặc thay thế các phần tử dữ liệu tại bất kỳ một vị trí chỉ số nào bên trong mảng theo yêu cầu của lập trình viên. [cite: 310]",
      "Dùng để tạo ra một bản sao hoàn toàn mới của mảng hiện tại bắt đầu từ một vị trí chỉ định đến một vị trí kết thúc đã được cho trước. [cite: 311]",
      "Dùng để thực hiện việc tìm kiếm một phần tử và trả về một giá trị logic nhằm xác định xem phần tử đó có đang tồn tại bên trong mảng. [cite: 312]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 1
  },
  {
    "q": "Từ khóa \"this\" khi được sử dụng bên trong một phương thức của đối tượng thường trỏ về đâu?",
    "opts": [
      "Từ khóa này sẽ luôn trỏ về đối tượng toàn cục (global object) của môi trường đang thực thi mã lệnh, ví dụ như đối tượng window. [cite: 314]",
      "Từ khóa này sẽ trỏ về chính đối tượng mà phương thức đó đang trực thuộc tại thời điểm phương thức đó được hệ thống gọi ra. [cite: 315]",
      "Từ khóa này sẽ trỏ về hàm cha cao nhất đã sinh ra đối tượng đó để lập trình viên có thể truy xuất ngược lại các thông tin của lớp cha. [cite: 316]",
      "Từ khóa này sẽ tự động trỏ về giá trị đặc biệt là undefined nếu phương thức đó hoàn toàn không nhận vào bất kỳ một tham số dữ liệu nào. [cite: 317]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 1
  },
  {
    "q": "Sự khác biệt quan trọng nhất giữa Arrow Function và các hàm thông thường là gì?",
    "opts": [
      "Hàm mũi tên có tốc độ thực thi chậm hơn so với các hàm thông thường do hệ thống phải mất thêm thời gian để xử lý các cú pháp viết ngắn gọn. [cite: 320]",
      "Hàm mũi tên (Arrow function) hoàn toàn không có khả năng nhận các tham số đầu vào từ bên ngoài giống như các hàm số thông thường. [cite: 321]",
      "Hàm mũi tên không tự tạo ra từ khóa \"this\" riêng cho nó mà sẽ thực hiện việc kế thừa từ khóa \"this\" từ phạm vi hoạt động bao quanh nó. [cite: 322]",
      "Hàm mũi tên bắt buộc lập trình viên phải luôn sử dụng từ khóa return để trả về kết quả ngay cả khi nội dung chỉ bao gồm một dòng mã. [cite: 323]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 2
  },
  {
    "q": "Tính năng tham số mặc định (Default Parameters) trong một hàm hoạt động như thế nào?",
    "opts": [
      "Cung cấp một giá trị sẵn có cho tham số nếu người gọi hàm không truyền giá trị vào hoặc truyền vào một giá trị có định dạng là undefined. [cite: 325]",
      "Tự động thực hiện việc thay thế mọi giá trị mà người dùng đã truyền vào hàm bằng một giá trị mặc định duy nhất đã được thiết lập từ trước. [cite: 326]",
      "Tính năng này chỉ có thể hoạt động ổn định nếu như hàm số đó được khai báo bằng cách sử dụng từ khóa function theo phong cách truyền thống. [cite: 327]",
      "Tính năng này sẽ ép buộc người dùng bắt buộc phải truyền vào đúng giá trị đã được định nghĩa, nếu không hệ thống sẽ ngay lập tức báo lỗi. [cite: 328]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 0
  },
  {
    "q": "Khái niệm \"Closure\" trong ngôn ngữ JavaScript được định nghĩa như thế nào?",
    "opts": [
      "Là một hàm số có khả năng ghi nhớ và truy cập vào các biến nằm trong phạm vi của hàm cha chứa nó ngay cả khi hàm cha đó đã hoàn thành việc thực thi. ",
      "Là một kỹ thuật lập trình chuyên dụng được dùng để ngăn chặn hoàn toàn việc truy cập vào các biến toàn cục từ bên trong các hàm số cục bộ. [cite: 331]",
      "Là một loại hàm số đặc biệt có khả năng tự đóng lại và ngay lập tức giải phóng toàn bộ bộ nhớ hệ thống sau khi nó vừa thực hiện xong nhiệm vụ. [cite: 332]",
      "Là một loại lỗi thực thi xảy ra khi có hai hàm số liên tục gọi lẫn nhau theo một chu kỳ kín, tạo thành một vòng lặp vô tận. [cite: 333]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 0
  },
  {
    "q": "Từ khóa \"constructor\" bên trong một Class có vai trò then chốt như thế nào?",
    "opts": [
      "Dùng để thực hiện việc hủy bỏ một đối tượng và giải phóng các tài nguyên sau khi ứng dụng đã hoàn tất việc sử dụng đối tượng đó. [cite: 335]",
      "Dùng để khai báo các phương thức tĩnh cho lớp mà không cần lập trình viên phải thực hiện việc khởi tạo một đối tượng mới từ lớp đó để sử dụng. [cite: 336]",
      "Dùng để thực hiện việc khởi tạo các giá trị thuộc tính ban đầu cho đối tượng ngay tại thời điểm mà đối tượng đó được tạo ra từ khuôn mẫu của lớp. [cite: 337]",
      "Dùng để tạo ra các kết nối bảo mật giữa Class hiện tại với các thư viện hoặc các mô-đun bên ngoài thông qua hệ thống quản lý gói npm. [cite: 338]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 2
  },
  {
    "q": "Lợi ích lớn nhất của việc sử dụng tính năng kế thừa (extends) trong Class là gì?",
    "opts": [
      "Tính năng này giúp giảm bớt đáng kể dung lượng của các tệp tin mã nguồn bằng cách thực hiện nén tất cả các lớp có liên quan lại với nhau. [cite: 340]",
      "Cho phép một lớp con có thể sử dụng lại toàn bộ các thuộc tính và phương thức chức năng đã được định nghĩa sẵn của lớp cha mà không cần viết lại mã. [cite: 341]",
      "Tính năng này thực hiện việc tự động chuyển đổi tất cả các phương thức chức năng của lớp cha thành các biến hằng số ở lớp con. [cite: 342]",
      "Tính năng này được dùng để ngăn chặn mọi hành vi thay đổi nội dung hoặc ghi đè các phương thức của lớp cha từ bất kỳ một lớp con nào. [cite: 343]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 1
  },
  {
    "q": "Một phương thức tĩnh (static method) trong một Class có điểm gì khác biệt so với phương thức thường?",
    "opts": [
      "Phương thức này hoàn toàn có thể được gọi trực tiếp từ tên của Class mà không cần lập trình viên phải tạo ra các đối tượng cụ thể từ Class đó. [cite: 345]",
      "Phương thức này có tốc độ thực thi nhanh hơn đáng kể so với các phương thức thông thường vì nó hoàn toàn không cần phải quản lý từ khóa \"this\". [cite: 346]",
      "Phương thức này chỉ có thể được truy cập và thực thi từ bên trong các phương thức chức năng khác của chính Class đó mà không thể gọi từ bên ngoài. [cite: 347]",
      "Sẽ tự động được thực thi ngay khi chương trình JavaScript bắt đầu khởi chạy lần đầu tiên trên trình duyệt web hoặc máy chủ Node.js. [cite: 348]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 0
  },
  {
    "q": "Một hàm \"Immediately Invoked Function Expression\" (IIFE) được hiểu là gì?",
    "opts": [
      "Là một loại hàm số đặc biệt được lập trình viên định nghĩa và yêu cầu hệ thống thực thi ngay lập tức tại đúng thời điểm mà hàm đó được khai báo. [cite: 350]",
      "Là một loại hàm số chỉ được thực hiện việc thực thi khi và chỉ khi có một sự kiện click chuột hoặc tương tác người dùng xảy ra trên giao diện. [cite: 351]",
      "Là một hàm số có khả năng đặc biệt là tự động thực hiện việc gọi lại chính nó nhiều lần sau một khoảng thời gian cố định nào đó. [cite: 352]",
      "Là một loại hàm ẩn danh hoàn toàn không có tên gọi và nó cũng không thể tiếp nhận bất kỳ một tham số dữ liệu đầu vào nào. [cite: 353]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 0
  },
  {
    "q": "Từ khóa \"super()\" được lập trình viên sử dụng trong Class con nhằm mục đích gì?",
    "opts": [
      "Dùng để đưa ra một thông báo đặc biệt cho trình duyệt biết đây là lớp quan trọng và cần được ưu tiên cấp phát tài nguyên để chạy. [cite: 355]",
      "Dùng để thực hiện việc gọi hàm khởi tạo (constructor) của lớp cha và cho phép lớp con có thể truy cập được vào các phương thức của lớp cha đó. [cite: 356]",
      "Dùng để thực hiện việc nâng cấp lớp con hiện tại lên thành một lớp có quyền hạn và ưu tiên xử lý cao hơn so với lớp cha ban đầu. [cite: 357]",
      "Dùng để thực hiện việc xóa bỏ hoàn toàn tất cả các thuộc tính đang bị trùng tên giữa lớp cha và lớp con hiện tại nhằm tránh xung đột. [cite: 358]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 1
  },
  {
    "q": "Tính năng \"Rest Parameters\" (...args) trong việc khai báo hàm có tác dụng thực tế là gì?",
    "opts": [
      "Cho phép một hàm số có thể nhận vào một số lượng đối số hoàn toàn không xác định và tự động nén chúng lại dưới định dạng là một mảng dữ liệu. [cite: 360]",
      "Dùng để bắt buộc tất cả các đối số được truyền vào hàm phải có cùng một kiểu dữ liệu duy nhất, nếu không hệ thống sẽ tự động thông báo lỗi. [cite: 361]",
      "Dùng để thiết lập giới hạn về số lượng tối đa các tham số mà một hàm số có thể nhận vào mỗi khi hàm đó được hệ thống gọi ra. [cite: 362]",
      "Sẽ thực hiện việc tự động chuyển đổi tất cả các đối số thành các chuỗi văn bản nhằm mục đích tăng cường tính bảo mật cho ứng dụng web. [cite: 363]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 0
  },
  {
    "q": "Sự khác biệt đáng chú ý nhất giữa Function Declaration và Function Expression là gì?",
    "opts": [
      "Function Declaration chỉ được dùng chuyên biệt cho hàm mũi tên, còn Function Expression dùng cho hàm số thông thường. [cite: 365]",
      "Function Declaration hoàn toàn không chịu ảnh hưởng của hoisting, trong khi đó Function Expression lại bị tác động bởi cơ chế này. [cite: 366]",
      "Function Declaration sẽ bị hệ thống tự động đẩy lên đầu phạm vi chạy (hoisting), trong khi đó Function Expression thì không và chỉ có hiệu lực sau dòng lệnh khai báo. [cite: 367]",
      "Thực tế không có bất kỳ sự khác biệt nào về cách thức hoạt động hay hiệu suất thực thi giữa hai loại khai báo này. [cite: 368]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 2
  },
  {
    "q": "Cho đoạn mã sau, kết quả hiển thị ở bảng điều khiển là gì?\nconst colors = [\"Red\", \"Green\"];\ncolors.push(\"Blue\");\ncolors.shift();\nconsole.log(colors);",
    "opts": [
      "Mảng [\"Red\", \"Green\", \"Blue\"] vì push thêm Blue vào cuối và shift chỉ sao chép. [cite: 375]",
      "Mảng [\"Green\", \"Blue\"] vì sau khi thêm Blue vào cuối, lệnh shift đã loại bỏ phần tử đầu tiên là Red ra khỏi mảng. [cite: 376]",
      "Mảng [\"Red\", \"Green\"] vì shift mặc định loại bỏ phần tử vừa được thêm vào sau cùng của mảng. [cite: 377]",
      "Lỗi TypeError vì mảng colors được khai báo bằng const nên không cho phép thay đổi phần tử bên trong. [cite: 378]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 1
  },
  {
    "q": "Đoạn mã sau đây sẽ in ra giá trị nào?\nconst numbers = [1, 2, 3, 4];\nconst result = numbers.filter(n => n % 2 === 0).map(n => n * 10);\nconsole.log(result);",
    "opts": [
      "Mảng [10, 20, 30, 40] vì map thực hiện phép nhân trên toàn bộ mảng gốc trước khi filter lọc dữ liệu. [cite: 383]",
      "Số 60 vì hệ thống sẽ thực hiện việc tính tổng của tất cả các phần tử sau khi đã được nhân với 10. [cite: 384]",
      "Mảng [20, 40] vì hàm filter đã lọc ra các số chẵn là 2 và 4, sau đó hàm map đã thực hiện nhân các số đó với 10. [cite: 385]",
      "Mảng [2, 4] vì sau khi thực hiện việc lọc, hàm map sẽ bị hệ thống bỏ qua nếu không có từ khóa return. [cite: 386]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 2
  },
  {
    "q": "Kết quả của biến 'total' sau khi thực thi đoạn mã này là gì?\nconst prices = [10, 20, 30];\nconst total = prices.reduce((acc, curr) => acc + curr, 5);",
    "opts": [
      "Giá trị số 60 vì reduce sẽ cộng dồn tất cả các phần tử bắt đầu từ giá trị mặc định đầu tiên là 10. [cite: 391]",
      "Giá trị số 65 vì phương thức reduce thực hiện việc cộng dồn các phần tử trong mảng bắt đầu từ giá trị khởi tạo (initial value) là số 5. [cite: 392]",
      "Giá trị số 55 vì hệ thống thực hiện cộng các phần tử và sau đó trừ đi giá trị khởi tạo ban đầu là 5. [cite: 393]",
      "Mảng mới chứa các giá trị [15, 25, 35] vì hàm callback bên trong reduce sẽ cộng 5 vào từng phần tử. [cite: 394]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 1
  },
  {
    "q": "Đoạn mã sau sẽ hiển thị nội dung gì?\nconst items = [\"A\", \"B\", \"C\"];\nconst sliced = items.slice(1, 3);\nconsole.log(sliced);",
    "opts": [
      "Mảng [\"A\", \"B\", \"C\"] vì slice lấy toàn bộ mảng nếu chỉ số kết thúc vượt quá độ dài thực tế. [cite: 399]",
      "Mảng [\"A\", \"B\"] vì hệ thống thực hiện cắt mảng bắt đầu từ vị trí đầu tiên cho đến khi đủ số lượng 2 phần tử. [cite: 400]",
      "Mảng mới [\"B\", \"C\"] vì phương thức slice(1, 3) sẽ trích xuất từ chỉ số 1 cho đến trước vị trí của phần tử tại chỉ số 3. ",
      "Chuỗi văn bản duy nhất \"BC\" vì phương thức slice trên mảng sẽ tự động thực hiện việc nối các phần tử lại. [cite: 402]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 2
  },
  {
    "q": "Sau khi chạy đoạn mã dưới đây, mảng 'data' có giá trị là bao nhiêu?\nconst data = [10, 20, 30, 40];\ndata.splice(1, 2, 99);",
    "opts": [
      "Mảng [10, 20, 99, 40] vì hệ thống mặc định chỉ xóa đi 1 phần tử tại chỉ số 2 và thay thế nó bằng 99. [cite: 407]",
      "Mảng [99, 30, 40] vì khi tham số thứ hai là số 2, hệ thống xóa tất cả phần tử nằm ở phía trước của vị trí chỉ định. [cite: 408]",
      "Mảng [10, 99, 40] vì phương thức splice đã thực hiện việc xóa đi 2 phần tử kể từ chỉ số 1 (là 20 và 30) và chèn giá trị 99 vào chính vị trí đó. ",
      "Mảng [10, 99, 20, 30, 40] vì phương thức splice chỉ thực hiện việc chèn thêm giá trị mới mà không làm mất đi dữ liệu cũ. [cite: 410]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 2
  },
  {
    "q": "Kết quả của đoạn mã xử lý chuỗi sau đây là gì?\nconst name = \"NodeJS\";\nconst part = name.slice(-2);\nconsole.log(part);",
    "opts": [
      "Chuỗi \"JS\" vì khi sử dụng chỉ số âm trong slice, JavaScript thực hiện việc đếm ngược từ phía cuối chuỗi trở về phía đầu để trích xuất. [cite: 416]",
      "Chuỗi \"No\" vì hệ thống lấy hai ký tự đầu tiên nếu tham số truyền vào là số nguyên có dấu âm. [cite: 417]",
      "Lỗi thực thi vì phương thức slice chỉ chấp nhận các tham số là số nguyên dương. [cite: 418]",
      "Chuỗi rỗng vì chỉ số âm không được hỗ trợ trong việc xử lý chuỗi văn bản. [cite: 419]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 0
  },
  {
    "q": "Đoạn mã sau đây in ra giá trị gì?\nconst msg = \"Hello World\";\nconsole.log(msg.split(\" \").reverse().join(\"-\"));",
    "opts": [
      "Mảng [\"World\", \"Hello\"] vì lệnh join sẽ bị hệ thống bỏ qua nếu kết quả sau khi đảo ngược mảng không được gán vào biến. [cite: 423]",
      "Chuỗi \"World-Hello\" vì lệnh split đã tách chuỗi thành mảng qua dấu cách, lệnh reverse đảo ngược mảng đó và lệnh join đã nối lại bằng dấu gạch ngang. [cite: 424]",
      "Chuỗi \"dlroW olleH\" vì phương thức reverse thực hiện việc đảo ngược toàn bộ thứ tự các ký tự trong chuỗi ban đầu. [cite: 425]",
      "Chuỗi \"Hello-World\" vì phương thức join luôn ưu tiên giữ nguyên thứ tự ban đầu của các từ trong chuỗi. [cite: 426]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 1
  },
  {
    "q": "Giá trị của 'output' trong đoạn mã sau là gì?\nconst code = \"  JavaScript  \";\nconst output = code.trim().toUpperCase().substring(0, 4);",
    "opts": [
      "Chuỗi \"JAVA\" vì lệnh trim xóa khoảng trắng ở hai đầu, toUpperCase chuyển sang chữ hoa và substring lấy 4 ký tự đầu tiên của chuỗi đã xử lý. [cite: 431]",
      "Lỗi vì phương thức trim không thể được gọi liên tiếp với các phương thức xử lý chuỗi khác trên cùng một biến. [cite: 432]",
      "Chuỗi \" JA\" vì lệnh substring thực hiện việc cắt chuỗi dựa trên độ dài nguyên bản bao gồm cả các khoảng trắng ở vị trí bắt đầu. [cite: 433]",
      "Chuỗi \"java\" vì phương thức toUpperCase sẽ tự động bị vô hiệu hóa nếu sau đó có một lệnh cắt chuỗi (substring). [cite: 434]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 0
  },
  {
    "q": "Đoạn mã sau đây trả về kết quả nào?\nconst version = \"v16.14.0\";\nconsole.log(version.includes(\"16\") && version.startsWith(\"v\"));",
    "opts": [
      "False vì toán tử logic AND yêu cầu cả hai vế phải hoàn toàn trùng khớp với toàn bộ nội dung của chuỗi gốc. [cite: 438]",
      "Chuỗi \"v16\" vì hệ thống sẽ tự động trích xuất phần nội dung thỏa mãn các điều kiện logic. [cite: 439]",
      "True vì chuỗi ban đầu thực sự có chứa đoạn ký tự \"16\" bên trong và nó cũng bắt đầu bằng ký tự \"v\". [cite: 440]",
      "Lỗi ReferenceError vì phương thức includes và startsWith chỉ được hỗ trợ trong các thư viện bên ngoài. [cite: 441]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 2
  },
  {
    "q": "Kết quả của biểu thức sau là gì?\nconst tech = \"React\";\nconsole.log(tech[0] + tech.length);",
    "opts": [
      "Chuỗi \"React5\" vì hệ thống ưu tiên hiển thị nội dung chuỗi gốc trước khi thực hiện việc in giá trị độ dài. [cite: 445]",
      "Lỗi vì không thể thực hiện phép toán cộng giữa một ký tự đơn lẻ được truy cập bằng chỉ số và một giá trị số nguyên. [cite: 446]",
      "Chuỗi \"R5\" vì tech[0] truy cập vào ký tự đầu tiên là \"R\" và tech.length trả về độ dài 5, sau đó hệ thống thực hiện nối chuỗi. [cite: 447]",
      "Số 87 vì JavaScript chuyển đổi ký tự \"R\" sang mã ASCII tương ứng và thực hiện phép cộng số học với độ dài chuỗi. [cite: 448]"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 2
  },
  {
    "q": "Kết quả in ra của đoạn mã sau là gì?\nclass User {\n  constructor(name) { this.name = name; }\n  sayHi() { return `Hi ${this.name}`; }\n}\nconst u1 = new User(\"Tiến\");\nconsole.log(u1.sayHi());",
    "opts": [
      "Hi undefined",
      "Hi name",
      "Lỗi khai báo",
      "Hi Tiến (u1 được khởi tạo với name là Tiến và sayHi đã truy cập đúng thuộc tính)."
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 3
  },
  {
    "q": "Đoạn mã sau hiển thị giá trị nào?\nclass Calc {\n  static sum(a, b) { return a + b; }\n}\nconsole.log(Calc.sum(10, 5));",
    "opts": [
      "Lỗi TypeError",
      "undefined",
      "15 (Phương thức tĩnh static được gọi trực tiếp qua tên lớp mà không cần khởi tạo đối tượng).",
      "15 kèm cảnh báo bộ nhớ"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 2
  },
  {
    "q": "Kết quả của đoạn mã kế thừa sau là gì?\nclass Person { constructor(n) { this.n = n; } }\nclass Student extends Person {\n  constructor(n, id) { super(n); this.id = id; }\n}\nconst s = new Student(\"An\", 123);\nconsole.log(s.n);",
    "opts": [
      "123",
      "undefined",
      "An (super(n) gọi hàm khởi tạo của lớp cha để gán giá trị cho thuộc tính n).",
      "Lỗi ReferenceError"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 2
  },
  {
    "q": "Đoạn mã sau in ra nội dung gì?\nclass Point { constructor(x, y) { this.x = x; this.y = y; } }\nconst p = new Point(10, 20);\nconst { x, y } = p;\nconsole.log(x + y);",
    "opts": [
      "30 (Destructuring trích xuất thành công x, y từ đối tượng p).",
      "NaN",
      "Lỗi hằng số const",
      "\"1020\""
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 0
  },
  {
    "q": "Giá trị hiển thị sau khi thực thi là gì?\nclass Counter { count = 0; increment() { this.count++; } }\nconst c1 = new Counter();\nc1.increment();\nconst c2 = c1;\nc2.increment();\nconsole.log(c1.count);",
    "opts": [
      "1",
      "0",
      "2 (c1 và c2 cùng trỏ về một vùng nhớ, nên thao tác trên c2 cũng là tác động lên c1).",
      "Lỗi phép gán"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 2
  },
  {
    "q": "Kết quả của đoạn mã này là gì?\nconst tags = [\"node\", \"js\"];\nconst result = tags.map(t => t.toUpperCase()).join(\"-\");\nconsole.log(result);",
    "opts": [
      "\"NODE-JS\"",
      "Lỗi phương thức liên tiếp",
      "[\"NODE\", \"JS\"]",
      "\"node-js\""
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 0
  },
  {
    "q": "Giá trị in ra là gì?\nconst obj = { a: 1, b: 2 };\nconst keys = Object.keys(obj);\nconsole.log(keys.length + keys[0]);",
    "opts": [
      "Lỗi không hỗ trợ",
      "\"2a\" (Độ dài mảng keys là 2, nối với phần tử đầu tiên là chuỗi \"a\").",
      "3",
      "\"21\""
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 1
  },
  {
    "q": "Đoạn mã sau trả về kết quả nào?\nconst part1 = [1, 2]; const part2 = [3, 4];\nconst combined = [...part1, ...part2];\nconsole.log(combined.length);",
    "opts": [
      "4 (Spread đã trải các phần tử của hai mảng vào mảng mới).",
      "2",
      "Mảng lồng nhau",
      "Lỗi cú pháp"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 0
  },
  {
    "q": "Kết quả của đoạn mã sau là gì?\nconst numbers = [10, 20, 30];\nconst [x, , z] = numbers;\nconsole.log(x + z);",
    "opts": [
      "NaN",
      "40 (Dấu phẩy trống bỏ qua phần tử thứ hai, gán x=10 và z=30).",
      "30",
      "Lỗi cú pháp"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 1
  },
  {
    "q": "Đoạn mã sau in ra kiểu dữ liệu gì?\nconst arr = [1, 2];\nconsole.log(typeof arr === \"object\" && Array.isArray(arr));",
    "opts": [
      "\"object\"",
      "true (Mảng là đối tượng đặc biệt và Array.isArray xác nhận nó là mảng).",
      "false",
      "Lỗi so sánh"
    ],
    "chapter": "Chương 2: JS Cơ bản",
    "ans": 1
  },
  {
    "q": "Vấn đề \"Callback Hell\" trong Node.js được hiểu như thế nào?",
    "opts": [
      "Dữ liệu bị sập do thực thi quá nhanh.",
      "Hiện tượng hàm callback lồng nhau quá nhiều lớp gây khó đọc và bảo trì mã.",
      "Kỹ thuật tối ưu hóa luồng phụ.",
      "Lỗi thiếu tham số error."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ",
    "ans": 1
  },
  {
    "q": "Trong \"Error-first callback\", tham số đầu tiên của hàm callback dùng để làm gì?",
    "opts": [
      "Chứa kết quả thành công.",
      "Chứa đối tượng lỗi; nếu thành công giá trị sẽ là null hoặc undefined.",
      "Theo dõi hàng đợi sự kiện.",
      "Xác định thời gian chờ (timeout)."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ",
    "ans": 1
  },
  {
    "q": "Một Promise có thể tồn tại ở những trạng thái nào?",
    "opts": [
      "Chỉ trạng thái Executing.",
      "Waiting, Accepted, Processing, Archived.",
      "Starting và Finished.",
      "Pending, Fulfilled và Rejected."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ",
    "ans": 3
  },
  {
    "q": "Ưu điểm lớn nhất của Promise so với Callback truyền thống là gì?",
    "opts": [
      "Khả năng xâu chuỗi (chaining) các tác vụ rõ ràng, quản lý lỗi tập trung.",
      "Tăng tính thẩm mỹ nhưng giảm hiệu suất.",
      "Tự động sửa lỗi logic.",
      "Can thiệp trực tiếp vào phần cứng CPU."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ",
    "ans": 0
  },
  {
    "q": "Từ khóa \"await\" có vai trò gì?",
    "opts": [
      "Buộc hệ thống bỏ qua tác vụ bất đồng bộ.",
      "Tạm dừng thực thi hàm cho đến khi Promise trả kết quả, dùng bên trong hàm async.",
      "Ưu tiên CPU tối đa cho đoạn mã đó.",
      "Chuyển biến toàn cục thành hằng số."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ",
    "ans": 1
  },
  {
    "q": "Phương thức \"Promise.all()\" hiệu quả nhất khi nào?",
    "opts": [
      "Khi cần thực thi song song nhiều tác vụ và chỉ nhận kết quả khi tất cả đều thành công.",
      "Khi cần sắp xếp thứ tự callback.",
      "Khi chuyển đổi từ đơn luồng sang đa luồng.",
      "Khi chỉ muốn chạy một tác vụ quan trọng nhất."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ",
    "ans": 0
  },
  {
    "q": "Cách xử lý lỗi chuẩn khi dùng async/await là gì?",
    "opts": [
      "Sử dụng cấu trúc try...catch bao quanh lệnh await.",
      "Sử dụng hàm callback phụ.",
      "Hệ thống tự động bắt lỗi mặc định.",
      "Dùng từ khóa throw trực tiếp."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ",
    "ans": 0
  },
  {
    "q": "Tại sao lập trình bất đồng bộ là \"trái tim\" của Node.js?",
    "opts": [
      "Giúp tạo hàng triệu luồng song song.",
      "Tự động mã hóa dữ liệu.",
      "Cho phép xử lý I/O (file, DB) ở chế độ nền mà không chặn luồng chính (Non-blocking).",
      "Giúp chạy trực tiếp trên phần cứng máy chủ."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ",
    "ans": 2
  },
  {
    "q": "Mẫu thiết kế IIFE thường dùng trong lập trình bất đồng bộ để làm gì?",
    "opts": [
      "Nén kích thước mã nguồn.",
      "Thực thi mã async/await ngay lập tức ở cấp độ cao nhất (top-level).",
      "Tạo biến toàn cục mới.",
      "Quản lý bộ nhớ tự động."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ",
    "ans": 1
  },
  {
    "q": "Sự khác biệt chính giữa lập trình đồng bộ (Sync) và bất đồng bộ (Async)?",
    "opts": [
      "Đồng bộ chạy song song, bất đồng bộ chạy tuần tự.",
      "Đồng bộ thực hiện tuần tự và phải đợi dòng trước xong, bất đồng bộ cho phép tiếp tục việc khác trong khi chờ kết quả.",
      "Đồng bộ chỉ dùng trên trình duyệt cũ.",
      "Đồng bộ yêu cầu internet liên tục."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ",
    "ans": 1
  },
  {
    "q": "Dự đoán thứ tự in ra của đoạn mã sau khi kết hợp cả setTimeout và Promise:\nconsole.log('1');\nsetTimeout(() => console.log('2'), 0);\nPromise.resolve().then(() => console.log('3'));\nconsole.log('4');",
    "opts": [
      "1, 3, 4, 2",
      "1, 2, 3, 4",
      "1, 4, 2, 3",
      "1, 4, 3, 2 (Mã đồng bộ chạy trước, sau đó Event Loop ưu tiên Microtask là Promise rồi mới đến Macrotask là setTimeout)."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ",
    "ans": 3
  },
  {
    "q": "Đoạn mã sử dụng async/await sau đây sẽ in kết quả theo thứ tự nào?\nasync function run() {\n  console.log('A');\n  await Promise.resolve();\n  console.log('B');\n}\nrun();\nconsole.log('C');",
    "opts": [
      "C, A, B",
      "A và C, chữ B không bao giờ in ra.",
      "A, B, C",
      "A, C, B (Lệnh in 'A' chạy đồng bộ, từ khóa await tạm dừng hàm run để chạy lệnh 'C' bên ngoài, sau đó mới quay lại in 'B')."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ",
    "ans": 3
  },
  {
    "q": "Kết quả hiển thị ở bảng điều khiển sau khi chạy đoạn mã xử lý lỗi Promise này là gì?\nPromise.resolve('Dữ liệu')\n.then(res => { throw new Error('Lỗi rồi'); })\n.catch(err => 'Đã xử lý')\n.then(res => console.log(res));",
    "opts": [
      "Lỗi rồi",
      "Đã xử lý (Phương thức .catch() đã bắt được lỗi và trả về một giá trị mới, giá trị này truyền tiếp xuống .then() cuối cùng).",
      "Dữ liệu",
      "Lỗi nghiêm trọng Uncaught Error"
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ",
    "ans": 1
  },
  {
    "q": "Dự đoán thứ tự các số được in ra trong đoạn mã lồng nhau dưới đây:\nasync function first() { console.log('1'); return '2'; }\nasync function second() {\n  const val = await first();\n  console.log(val);\n  console.log('3');\n}\nsecond();\nconsole.log('4');",
    "opts": [
      "1, 2, 3, 4",
      "1, 4, 2, 3 (Lệnh in '1' chạy đồng bộ khi gọi first, await tạm dừng second để chạy lệnh '4' bên ngoài, cuối cùng quay lại in '2' và '3').",
      "4, 1, 2, 3",
      "1, 2, 4, 3"
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ",
    "ans": 1
  },
  {
    "q": "Phương thức \"Promise.all\" sẽ trả về kết quả gì nếu có một Promise bị reject?\nconst p1 = Promise.resolve('A');\nconst p2 = Promise.reject('B');\nconst p3 = Promise.resolve('C');\nPromise.all([p1, p2, p3]).catch(err => console.log(err));",
    "opts": [
      "Chuỗi 'B' (Promise.all hoạt động theo nguyên tắc 'fail-fast', sẽ reject ngay khi có bất kỳ một Promise nào trong mảng bị lỗi).",
      "Thành công",
      "Mảng ['A', 'B', 'C']",
      "Lỗi cú pháp"
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ",
    "ans": 0
  },
  {
    "q": "Thư viện lõi (Core Libraries) trong Node.js được định nghĩa như thế nào?",
    "opts": [
      "Các gói phải cài đặt qua npm.",
      "Các mô-đun được tích hợp sẵn vào môi trường thực thi Node.js, sử dụng được ngay mà không cần cài đặt.",
      "Tập hợp mã JS chỉ hoạt động trên trình duyệt.",
      "Tệp cấu hình hệ thống."
    ],
    "chapter": "Chương 3.2: Thư viện lõi Node.js",
    "ans": 1
  },
  {
    "q": "Chỉ số ổn định (Stability Index) mức \"2 - Stable\" của một thư viện lõi có ý nghĩa gì?",
    "opts": [
      "Tính năng đã lỗi thời.",
      "Chỉ dành cho nhà phát triển đóng góp mã nguồn cho Node.js.",
      "Đang trong quá trình thử nghiệm sơ khai.",
      "Tính năng đã đạt đến độ chín muồi, API ổn định và không có thay đổi lớn gây phá vỡ tính tương thích trong tương lai gần."
    ],
    "chapter": "Chương 3.2: Thư viện lõi Node.js",
    "ans": 3
  },
  {
    "q": "Mô-đun \"fs\" (File System) trong Node.js chủ yếu được sử dụng để làm gì?",
    "opts": [
      "Quản lý kết nối mạng không dây.",
      "Cung cấp các API để tương tác với hệ thống tệp tin (đọc, ghi, xóa, quản lý thư mục).",
      "Điều khiển bàn phím, chuột.",
      "Tối ưu hóa GPU."
    ],
    "chapter": "Chương 3.2: Thư viện lõi Node.js",
    "ans": 1
  },
  {
    "q": "Sự khác biệt giữa các phương thức đồng bộ (Sync) và bất đồng bộ (Async) trong mô-đun fs là gì?",
    "opts": [
      "Sync bắt buộc đặt trong hàm async.",
      "Không có sự khác biệt hiệu năng.",
      "Phương thức đồng bộ sẽ dừng luồng chính cho đến khi hoàn tất, trong khi bất đồng bộ dùng callback/promise để không chặn luồng chính.",
      "Bất đồng bộ chậm hơn và tốn bộ nhớ hơn."
    ],
    "chapter": "Chương 3.2: Thư viện lõi Node.js",
    "ans": 2
  },
  {
    "q": "Mô-đun \"path\" trong thư viện lõi cung cấp các tính năng quan trọng nào?",
    "opts": [
      "Xử lý và biến đổi đường dẫn tệp tin, giúp mã nguồn hoạt động chính xác trên các hệ điều hành khác nhau (Windows, Linux).",
      "Thuật toán tìm đường đi ngắn nhất.",
      "Mã hóa dữ liệu đường truyền.",
      "Giao diện đồ họa kéo thả tệp tin."
    ],
    "chapter": "Chương 3.2: Thư viện lõi Node.js",
    "ans": 0
  },
  {
    "q": "Phương thức \"path.join()\" có đặc điểm gì nổi bật so với nối chuỗi đường dẫn thông thường?",
    "opts": [
      "Bắt buộc dùng đường dẫn tuyệt đối.",
      "Kiểm tra tệp tin có tồn tại hay không.",
      "Tự động dùng dấu phân cách phù hợp với OS và làm sạch các đoạn đường dẫn thừa dấu gạch chéo.",
      "Nén đường dẫn thành định dạng nhị phân."
    ],
    "chapter": "Chương 3.2: Thư viện lõi Node.js",
    "ans": 2
  },
  {
    "q": "Đối tượng \"process\" trong Node.js đại diện cho điều gì?",
    "opts": [
      "Quy trình cài đặt Node.js.",
      "Tiến trình đang thực thi của ứng dụng, cung cấp thông tin môi trường chạy, biến hệ thống và kiểm soát luồng thoát.",
      "Luồng dữ liệu hình ảnh.",
      "Giao thức truyền tải thay thế HTTP."
    ],
    "chapter": "Chương 3.2: Thư viện lõi Node.js",
    "ans": 1
  },
  {
    "q": "Cách thức truy cập vào các biến môi trường (Environment Variables) thông qua đối tượng process là gì?",
    "opts": [
      "Phải nạp mô-đun 'dotenv'.",
      "Chỉ truy cập qua callback bất đồng bộ.",
      "Sử dụng thuộc tính process.env để lấy đối tượng chứa tất cả các biến môi trường.",
      "Sử dụng phương thức process.getEnv()."
    ],
    "chapter": "Chương 3.2: Thư viện lõi Node.js",
    "ans": 2
  },
  {
    "q": "Mô-đun \"os\" trong thư viện lõi thường được sử dụng khi nào?",
    "opts": [
      "Khi cần lấy thông tin phần cứng và hệ điều hành (RAM, CPU, địa chỉ mạng).",
      "Khi muốn tạo cửa sổ giao diện đồ họa.",
      "Khi cần cài đặt lại hệ điều hành.",
      "Khi cần tối ưu hóa hình ảnh/video."
    ],
    "chapter": "Chương 3.2: Thư viện lõi Node.js",
    "ans": 0
  },
  {
    "q": "Đặc điểm của hệ thống mô-đun CommonJS (CJS) truyền thống trong Node.js là gì?",
    "opts": [
      "Sử dụng require() để nạp mô-đun đồng bộ và module.exports để chia sẻ mã nguồn.",
      "Tự động nạp tất cả tệp trong thư mục.",
      "Sử dụng import/export.",
      "Yêu cầu phần mở rộng .mjs."
    ],
    "chapter": "Chương 3.2: Thư viện lõi Node.js",
    "ans": 0
  },
  {
    "q": "Sự khác biệt chính của ECMAScript Modules (ESM) so với CommonJS là gì?",
    "opts": [
      "ESM sử dụng cú pháp import/export hiện đại, nạp mô-đun theo cơ chế bất đồng bộ và tĩnh.",
      "ESM chỉ chạy trên phiên bản Node.js cũ.",
      "ESM bắt buộc dùng 'use strict'.",
      "ESM không hỗ trợ thư viện lõi."
    ],
    "chapter": "Chương 3.2: Thư viện lõi Node.js",
    "ans": 0
  },
  {
    "q": "Mô-đun \"util\" cung cấp phương thức promisify() nhằm mục đích gì?",
    "opts": [
      "Sửa lỗi logic đơn giản.",
      "Tạo bản sao sâu (deep copy).",
      "Chuyển đổi hàm sử dụng callback truyền thống sang định dạng trả về Promise để dùng với async/await.",
      "Nén tệp tin JS."
    ],
    "chapter": "Chương 3.2: Thư viện lõi Node.js",
    "ans": 2
  },
  {
    "q": "Vai trò của mô-đun \"events\" và lớp EventEmitter là gì?",
    "opts": [
      "Cung cấp nền tảng cho kiến trúc hướng sự kiện (event-driven), cho phép phát và lắng nghe sự kiện.",
      "Theo dõi thao tác bàn phím/chuột.",
      "Quản lý lập lịch (cron jobs).",
      "Tạo kênh giao tiếp bảo mật giữa các tiến trình."
    ],
    "chapter": "Chương 3.2: Thư viện lõi Node.js",
    "ans": 0
  },
  {
    "q": "Trong mô-đun fs, sự khác biệt giữa fs.readFile() và fs.promises.readFile() là gì?",
    "opts": [
      "Chỉ fs.readFile() đọc được tệp nhị phân.",
      "fs.readFile() trả về dữ liệu ngay lập tức.",
      "fs.readFile() dùng cơ chế callback, còn fs.promises.readFile() trả về Promise để xử lý.",
      "Phiên bản promises chậm hơn."
    ],
    "chapter": "Chương 3.2: Thư viện lõi Node.js",
    "ans": 2
  },
  {
    "q": "Để đăng ký một hàm lắng nghe (listener) cho sự kiện trong lớp EventEmitter, ta dùng phương thức nào?",
    "opts": [
      "Sử dụng .on() hoặc .addListener().",
      "Sử dụng thuộc tính .onEvent.",
      "Sử dụng phương thức .emit().",
      "Sử dụng từ khóa new Event()."
    ],
    "chapter": "Chương 3.2: Thư viện lõi Node.js",
    "ans": 0
  },
  {
    "q": "Phương thức \"path.resolve()\" khác với \"path.join()\" như thế nào?",
    "opts": [
      "path.resolve() luôn trả về một đường dẫn tuyệt đối bằng cách giải quyết các đoạn đường dẫn từ phải sang trái cho đến khi tạo thành một đường dẫn hoàn chỉnh từ gốc.",
      "path.resolve() chỉ thực hiện việc nối các chuỗi lại với nhau mà không quan tâm đến thư mục làm việc hiện tại, trong khi path.join() sẽ tự động thêm thư mục gốc vào.",
      "Không có sự khác biệt thực tế nào giữa hai phương thức này, chúng được thiết kế để có thể dùng thay thế cho nhau hoàn toàn nhằm mục đích làm phong phú cú pháp lệnh.",
      "path.resolve() được thiết kế để chỉ làm việc với các địa chỉ URL trang web, còn path.join() được dùng chuyên biệt cho các đường dẫn tệp tin cục bộ trên máy tính."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ - Node Module",
    "ans": 0
  },
  {
    "q": "Phương thức \"process.exit()\" nên được sử dụng cẩn trọng vì lý do gì?",
    "opts": [
      "Nó sẽ tự động thực hiện việc xóa sạch toàn bộ mã nguồn của ứng dụng trong thư mục hiện tại để đảm bảo không còn dấu vết nào sau khi ứng dụng ngừng hoạt động.",
      "Nó sẽ ngay lập tức dừng tiến trình hiện tại mà không đợi các tác vụ bất đồng bộ đang chạy hoàn tất, điều này có thể dẫn đến việc mất dữ liệu hoặc lỗi hệ thống.",
      "Nó yêu cầu người dùng phải có quyền quản trị cao nhất của hệ điều hành mới có thể thực thi được lệnh thoát, nếu không hệ thống sẽ báo lỗi phân quyền nghiêm trọng.",
      "Lệnh này chỉ hoạt động được trên các môi trường phát triển cục bộ và sẽ hoàn toàn bị vô hiệu hóa khi ứng dụng được triển khai lên các máy chủ sản xuất thực tế."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ - Node Module",
    "ans": 1
  },
  {
    "q": "Để sử dụng ESM trong Node.js mà không cần đổi đuôi tệp thành .mjs, bạn cần làm gì?",
    "opts": [
      "Khai báo một biến toàn cục có tên là ENABLE_ESM với giá trị là true ở ngay dòng lệnh đầu tiên của tệp tin thực thi chính để hệ thống kích hoạt tính năng mới.",
      "Thêm thuộc tính \"type\": \"module\" vào tệp tin package.json của dự án để thông báo cho Node.js rằng tất cả các tệp .js trong thư mục này nên được xử lý như ESM.",
      "Cài đặt thêm một thư viện hỗ trợ từ bên ngoài có tên là 'esm-loader' và nạp nó vào ứng dụng thông qua tham số dòng lệnh --require khi khởi chạy máy chủ Node.js.",
      "Thực hiện việc nén toàn bộ dự án thành một định dạng tệp tin duy nhất và sử dụng trình biên dịch Babel để chuyển đổi mã nguồn sang định dạng mà Node.js có thể hiểu được."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ - Node Module",
    "ans": 1
  },
  {
    "q": "Các biến như \"__dirname\" và \"__filename\" có sẵn trong môi trường nào?",
    "opts": [
      "Chúng chỉ có sẵn khi ứng dụng được chạy ở chế độ gỡ lỗi (debug mode) và sẽ tự động bị xóa bỏ khi ứng dụng chạy ở chế độ sản xuất bình thường để đảm bảo tính bảo mật.",
      "Chúng có sẵn trong cả hệ thống mô-đun CommonJS và ECMAScript Modules, cho phép lập trình viên dễ dàng lấy thông tin về thư mục và tệp tin hiện tại đang thực thi.",
      "Chúng chỉ có sẵn trong hệ thống mô-đun CommonJS; trong ECMAScript Modules, lập trình viên phải sử dụng các cách tiếp cận khác thông qua import.meta.url để lấy thông tin tương tự.",
      "Chúng là các biến toàn cục thực sự của Node.js, tương tự như đối tượng process hoặc console, và có thể được truy cập từ bất kỳ tệp tin nào mà không phụ thuộc vào loại mô-đun."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ - Node Module",
    "ans": 2
  },
  {
    "q": "Tại sao việc sử dụng các thư viện lõi lại giúp ứng dụng Node.js có hiệu năng tốt hơn?",
    "opts": [
      "Vì chúng được viết một phần bằng ngôn ngữ C++ và được tối ưu hóa sâu trong nhân của Node.js, giúp tận dụng tối đa sức mạnh của phần cứng hơn các thư viện bên ngoài.",
      "Vì các thư viện lõi không chứa bất kỳ đoạn mã JavaScript nào mà chỉ bao gồm các lệnh máy thuần túy, giúp bỏ qua bước thông dịch của công cụ V8 trong quá trình chạy.",
      "Vì chúng tự động nén tất cả dữ liệu đầu vào và đầu ra bằng các thuật toán nén hiện đại nhất, giúp giảm thiểu tối đa băng thông truyền tải và dung lượng bộ nhớ sử dụng.",
      "Vì chúng có khả năng tự động phát hiện và sửa chữa các lỗi phần cứng của máy chủ ngay trong quá trình thực thi để đảm bảo ứng dụng luôn hoạt động ổn định nhất có thể."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ - Node Module",
    "ans": 0
  },
  {
    "q": "Dự đoán kết quả của đoạn mã xử lý đường dẫn: path.join('/users', 'admin', '..', 'projects', 'node');",
    "opts": [
      "Kết quả trả về là chuỗi văn bản \"/users/projects/node\" vì phương thức này đã thực hiện việc chuẩn hóa đường dẫn, trong đó ký hiệu \"..\" có tác dụng lùi lại một cấp thư mục, làm loại bỏ thư mục \"admin\" ra khỏi kết quả cuối cùng.",
      "Hệ thống sẽ báo một lỗi thực thi nghiêm trọng vì đường dẫn chứa ký hiệu \"..\" được coi là một hành vi truy cập trái phép vào các thư mục cấp cao hơn và bị các thư viện lõi của Node.js ngăn chặn vì lý do bảo mật.",
      "Kết quả trả về là chuỗi văn bản \"/users/admin/../projects/node\" vì phương thức path.join chỉ thực hiện việc nối các đoạn chuỗi lại với nhau bằng dấu gạch chéo mà không quan tâm đến ý nghĩa của các ký hiệu đặc biệt.",
      "Kết quả trả về là chuỗi văn bản \"/projects/node\" vì khi gặp ký hiệu \"..\" hệ thống sẽ tự động hiểu rằng cần phải quay trở lại thư mục gốc của hệ điều hành và bắt đầu tính lại đường dẫn từ đầu cho đến hết các tham số."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ - Node Module",
    "ans": 0
  },
  {
    "q": "Thứ tự các ký tự in ra màn hình console khi thực thi đoạn mã emitter.emit('update') sau khi đăng ký A rồi đến B?",
    "opts": [
      "Kết quả in ra là ký tự \"B\" rồi đến ký tự \"A\" vì hệ thống ưu tiên thực hiện các trình lắng nghe được khai báo sau cùng nhằm đảm bảo các tính năng mới nhất của ứng dụng luôn được cập nhật và xử lý trước tiên.",
      "Kết quả in ra là hai ký tự \"A\" và \"B\" nhưng thứ tự xuất hiện của chúng là hoàn toàn ngẫu nhiên vì Node.js sẽ thực hiện các trình lắng nghe sự kiện dưới dạng các tác vụ bất đồng bộ song song trên các luồng khác nhau.",
      "Kết quả in ra là ký tự \"A\" rồi đến ký tự \"B\" vì trong Node.js, các trình lắng nghe sự kiện (listeners) sẽ được thực thi theo đúng thứ tự mà chúng đã được đăng ký với đối tượng EventEmitter trước đó.",
      "Kết quả in ra chỉ bao gồm duy nhất ký tự \"B\" vì mỗi một sự kiện trong Node.js chỉ cho phép có tối đa một trình lắng nghe hoạt động, và trình lắng nghe sau sẽ tự động ghi đè hoàn toàn lên trình lắng nghe trước đó."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ - Node Module",
    "ans": 2
  },
  {
    "q": "Nếu chạy \"node app.js hello 123\", kết quả của console.log(process.argv[2] + process.argv[1]) là gì?",
    "opts": [
      "Hệ thống sẽ báo lỗi vì mảng process.argv chỉ được phép chứa tối đa hai phần tử mặc định và việc truy cập vào chỉ số thứ hai sẽ dẫn đến lỗi vượt quá phạm vi của mảng dữ liệu trong JavaScript.",
      "Kết quả trả về là chuỗi văn bản \"hello123\" vì hệ thống sẽ lấy tham số đầu tiên người dùng truyền vào (hello) nối với tham số thứ hai (123) để tạo thành một chuỗi duy nhất hiển thị trên màn hình.",
      "Kết quả trả về là một chuỗi bao gồm nội dung \"hello\" kết hợp với đường dẫn tuyệt đối của tệp tin app.js vì trong mảng process.argv, chỉ số 1 luôn lưu trữ đường dẫn đến tệp tin script đang được thực thi.",
      "Kết quả trả về là giá trị số 123 vì hệ thống sẽ bỏ qua tham số văn bản \"hello\" và chỉ thực hiện việc in ra giá trị của tham số dạng số duy nhất được tìm thấy trong danh sách các đối số dòng lệnh."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ - Node Module",
    "ans": 2
  },
  {
    "q": "Dự đoán thứ tự in ra của đoạn mã kết hợp giữa fs.readFile (bất đồng bộ) và fs.readFileSync (đồng bộ):",
    "opts": [
      "Thứ tự in ra là X, Y, Z vì JavaScript sẽ thực hiện nạp tệp tin ở chế độ bất đồng bộ trước, sau đó mới lần lượt thực hiện các lệnh in dữ liệu ra màn hình bảng điều khiển theo thứ tự dòng lệnh.",
      "Thứ tự in ra là Y, Z, X vì lệnh in 'Y' và lệnh đọc tệp đồng bộ kèm in 'Z' sẽ chạy ngay lập tức trên luồng chính, còn lệnh in 'X' phải chờ tệp được đọc xong ở chế độ bất đồng bộ mới được thực thi.",
      "Thứ tự in ra là Y, X, Z vì sau khi thực hiện lệnh in 'Y', hệ thống sẽ ưu tiên thực hiện các hàm callback của tác vụ bất đồng bộ trước khi cho phép các lệnh đồng bộ tiếp theo được phép hoạt động.",
      "Kết quả in ra là Z, Y, X vì các phương thức có hậu tố \"Sync\" luôn được Node.js ưu tiên đẩy lên đầu hàng đợi thực thi để đảm bảo dữ liệu quan trọng luôn được xử lý trước các tác vụ thông thường khác."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ - Node Module",
    "ans": 1
  },
  {
    "q": "Đoạn mã \"path.resolve('/etc', 'nginx', 'sites-available')\" trả về kết quả như thế nào trên Linux?",
    "opts": [
      "Kết quả trả về là chuỗi \"nginx/sites-available\" vì phương thức resolve sẽ tự động loại bỏ thư mục gốc đầu tiên nếu nó nhận thấy có quá nhiều cấp thư mục được truyền vào trong các tham số.",
      "Hệ thống sẽ trả về giá trị undefined vì phương thức path.resolve chỉ hoạt động với các đường dẫn tương đối và sẽ không chấp nhận các tham số bắt đầu bằng dấu gạch chéo đại diện cho thư mục gốc.",
      "Kết quả trả về là đường dẫn tuyệt đối \"/etc/nginx/sites-available\" vì khi tham số đầu tiên bắt đầu bằng dấu gạch chéo, resolve sẽ coi đó là gốc và nối các đoạn đường dẫn tiếp theo một cách tuần tự.",
      "Kết quả trả về là đường dẫn bao gồm cả thư mục làm việc hiện tại của ứng dụng được nối thêm vào phía trước của đoạn chuỗi \"/etc/nginx/sites-available\" để tạo thành một địa chỉ duy nhất."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ - Node Module",
    "ans": 2
  },
  {
    "q": "npm (Node Package Manager) đóng vai trò chính là gì trong hệ sinh thái Node.js?",
    "opts": [
      "npm đóng vai trò là một trình soạn thảo mã nguồn trực tuyến cho phép các lập trình viên viết và chạy mã JavaScript trực tiếp trên trình duyệt web mà không cần cài đặt môi trường Node.js.",
      "npm đóng vai trò là một công cụ đồ họa giúp người dùng quản lý các tiến trình đang chạy trên máy chủ và thực hiện việc tối ưu hóa tài nguyên phần cứng cho các ứng dụng web quy mô lớn.",
      "npm đóng vai trò là một trình quản lý gói mặc định cho Node.js, bao gồm một kho lưu trữ trực tuyến chứa hàng triệu thư viện và một công cụ dòng lệnh để quản lý các gói phụ thuộc của dự án.",
      "npm đóng vai trò là một hệ điều hành siêu nhỏ được tích hợp vào Node.js để quản lý việc giao tiếp giữa phần mềm và các thiết bị phần cứng vật lý thông qua các trình điều khiển chuyên dụng."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ - Node Module",
    "ans": 2
  },
  {
    "q": "Tệp tin \"package.json\" trong một dự án Node.js có mục đích sử dụng là gì?",
    "opts": [
      "Tệp tin này đóng vai trò là một bản kê khai (manifest) chứa các thông tin mô tả về dự án, các biến môi trường và danh sách các gói phụ thuộc cần thiết để ứng dụng có thể vận hành.",
      "Tệp tin này là một tập hợp các quy tắc bảo mật nghiêm ngặt giúp ngăn chặn các cuộc tấn công mạng vào mã nguồn của dự án thông qua việc mã hóa tất cả các biến toàn cục hiện có.",
      "Tệp tin này dùng để lưu trữ toàn bộ mã nguồn nhị phân của các thư viện bên ngoài nhằm mục đích tăng tốc độ khởi động cho ứng dụng mỗi khi máy chủ được kích hoạt lại từ đầu.",
      "Tệp tin này dùng để lưu trữ lịch sử các lần chỉnh sửa mã nguồn của lập trình viên và tự động đồng bộ hóa các thay đổi đó lên các dịch vụ lưu trữ đám mây như GitHub hay GitLab."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ - Node Module",
    "ans": 0
  },
  {
    "q": "Sự khác biệt giữa \"dependencies\" và \"devDependencies\" trong tệp package.json là gì?",
    "opts": [
      "Dependencies là danh sách các gói phụ thuộc được cài đặt trên máy tính cá nhân của lập trình viên, trong khi devDependencies là danh sách các gói được cài đặt trên máy chủ của khách hàng.",
      "Dependencies là các thư viện chỉ dùng trong quá trình phát triển mã nguồn, trong khi devDependencies là các thư viện bắt buộc phải có để ứng dụng có thể chạy thực tế trên máy chủ.",
      "Dependencies là các gói cần thiết để ứng dụng chạy trong môi trường thực tế, còn devDependencies là các gói chỉ phục vụ cho việc phát triển như kiểm thử, định dạng mã hoặc biên dịch.",
      "Dependencies là các thư viện mã nguồn mở hoàn toàn miễn phí, trong khi devDependencies là các thư viện thương mại yêu cầu lập trình viên phải trả phí bản quyền hàng tháng để sử dụng."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ - Node Module",
    "ans": 2
  },
  {
    "q": "Ký hiệu dấu mũ (^) đứng trước phiên bản gói (ví dụ: \"^1.2.3\") trong package.json có ý nghĩa gì?",
    "opts": [
      "Hệ thống sẽ cố định phiên bản này một cách tuyệt đối và không bao giờ thực hiện việc cập nhật lên bất kỳ phiên bản mới nào khác bất kể có các bản vá lỗi quan trọng được phát hành.",
      "Hệ thống được phép cập nhật lên các phiên bản mới hơn có sự thay đổi về số \"Minor\" hoặc \"Patch\", nhưng không được phép cập nhật lên phiên bản có sự thay đổi lớn về số \"Major\".",
      "Hệ thống sẽ tự động xóa bỏ gói này nếu phát hiện có một gói khác tương đương được cài đặt vào dự án nhằm mục đích tiết kiệm dung lượng lưu trữ cho thư mục node_modules hiện tại.",
      "Hệ thống chỉ cho phép cập nhật lên các phiên bản có sự thay đổi ở số cuối cùng (Patch) để đảm bảo tính ổn định tối đa cho ứng dụng và tránh mọi xung đột về mã nguồn có thể xảy ra."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ - Node Module",
    "ans": 1
  },
  {
    "q": "Tệp tin \"package-lock.json\" được sinh ra nhằm mục đích cốt lõi là gì?",
    "opts": [
      "Tệp tin này ghi lại chính xác phiên bản của từng gói phụ thuộc và toàn bộ cấu trúc cây thư mục của chúng để đảm bảo tính đồng nhất khi cài đặt dự án trên các máy tính khác nhau.",
      "Tệp tin này đóng vai trò là một bản sao lưu dự phòng cho tệp package.json trong trường hợp tệp tin chính bị lỗi hoặc bị xóa mất do sơ suất của lập trình viên trong quá trình làm việc.",
      "Tệp tin này dùng để khóa toàn bộ mã nguồn của dự án lại để người dùng khác không thể xem hoặc chỉnh sửa các đoạn mã nhạy cảm bên trong các thư viện được cài đặt từ internet.",
      "Tệp tin này chứa các thông tin đăng nhập và mã khóa bảo mật của lập trình viên để hệ thống tự động xác thực quyền truy cập vào các kho lưu trữ gói riêng tư của doanh nghiệp."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ - Node Module",
    "ans": 0
  },
  {
    "q": "Thư mục \"node_modules\" trong một dự án Node.js chứa nội dung gì?",
    "opts": [
      "Thư mục này chứa mã nguồn thực tế của tất cả các gói phụ thuộc và các gói phụ thuộc của chính chúng, là nơi mà Node.js tìm kiếm các mô-đun khi lập trình viên thực hiện lệnh nạp mã.",
      "Thư mục này chứa các tệp tin hướng dẫn sử dụng và tài liệu kỹ thuật chi tiết của tất cả các thư viện mà lập trình viên đã tải về từ kho lưu trữ của npm để phục vụ việc tra cứu mã.",
      "Thư mục này chứa các tệp tin thực thi của hệ điều hành giúp các ứng dụng Node.js có thể giao tiếp trực tiếp với bộ vi xử lý và card đồ họa của máy tính nhằm tăng hiệu suất xử lý tác vụ.",
      "Thư mục này là nơi lưu trữ các tệp tin tạm thời được sinh ra trong quá trình ứng dụng vận hành và sẽ tự động được hệ thống xóa sạch mỗi khi lập trình viên tắt máy tính hoặc đóng trình duyệt."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ - Node Module",
    "ans": 0
  },
  {
    "q": "Lệnh \"npm init\" thường được lập trình viên thực hiện khi nào?",
    "opts": [
      "Khi lập trình viên cần thực hiện việc kiểm tra tính bảo mật của mã nguồn và liệt kê tất cả các lỗ hổng tiềm ẩn có trong các thư viện bên ngoài đang được sử dụng trong ứng dụng.",
      "Khi lập trình viên muốn bắt đầu quá trình triển khai ứng dụng lên máy chủ thực tế và yêu cầu hệ thống thực hiện việc nén toàn bộ mã nguồn để giảm thiểu tối đa dung lượng tệp tin.",
      "Khi lập trình viên muốn khởi tạo một dự án Node.js mới, lệnh này sẽ dẫn dắt người dùng qua các câu hỏi để tự động tạo ra một tệp tin package.json cơ bản cho dự án đó.",
      "Khi lập trình viên muốn xóa bỏ toàn bộ các gói phụ thuộc hiện có trong thư mục node_modules để thực hiện việc cài đặt lại từ đầu nhằm sửa chữa các lỗi liên quan đến phiên bản gói."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ - Node Module",
    "ans": 2
  },
  {
    "q": "Công cụ \"npx\" (Node Package Executor) có điểm khác biệt gì so với \"npm\"?",
    "opts": [
      "npx là phiên bản trả phí của npm dành cho các doanh nghiệp lớn, cung cấp tốc độ tải các gói thư viện nhanh hơn gấp nhiều lần và có khả năng bảo mật dữ liệu tuyệt đối cho mã nguồn.",
      "npx thực chất là một trình duyệt web siêu nhỏ được tích hợp vào dòng lệnh của Node.js giúp lập trình viên có thể xem trước các giao diện trang web trong quá trình phát triển mã nguồn.",
      "npx cho phép lập trình viên thực thi trực tiếp các gói nhị phân (binary) từ kho lưu trữ npm mà không cần phải thực hiện thao tác cài đặt vĩnh viễn chúng vào hệ thống máy tính.",
      "npx là một thư viện hỗ trợ chuyên dùng để chuyển đổi các đoạn mã JavaScript từ định dạng ESM sang định dạng CommonJS để đảm bảo tính tương thích trên các phiên bản Node.js cũ."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ - Node Module",
    "ans": 2
  },
  {
    "q": "Khi nào một gói nên được cài đặt với cờ toàn cục \"-g\" (global)?",
    "opts": [
      "Khi gói đó chứa các mã nguồn quan trọng phục vụ trực tiếp cho các tính năng logic của ứng dụng và cần được truy cập từ nhiều tệp tin khác nhau bên trong cùng một dự án Node.js.",
      "Khi ứng dụng yêu cầu quyền truy cập vào các thư mục hệ thống nhạy cảm của máy tính và cần được hệ điều hành ưu tiên cấp phát tài nguyên xử lý tối đa trong suốt quá trình vận hành.",
      "Khi gói đó cung cấp các công cụ dòng lệnh (CLI tools) được sử dụng rộng rãi cho nhiều dự án khác nhau trên máy tính, ví dụ như các trình quản lý phiên bản Node.js hoặc trình biên dịch mã.",
      "Khi lập trình viên muốn chia sẻ gói thư viện đó cho tất cả các người dùng khác trên internet thông qua kho lưu trữ công khai của npm mà không cần phải đăng ký tài khoản thành viên."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ - Node Module",
    "ans": 2
  },
  {
    "q": "Lệnh \"npm install --production\" thực hiện nhiệm vụ gì?",
    "opts": [
      "Lệnh này sẽ thực hiện việc nén toàn bộ mã nguồn và mã hóa các tệp tin cấu hình để chuẩn bị cho việc đóng gói ứng dụng thành một tệp tin thực thi duy nhất dành cho người dùng cuối.",
      "Lệnh này sẽ chỉ thực hiện việc cài đặt các gói nằm trong mục \"dependencies\" và bỏ qua hoàn toàn các gói trong mục \"devDependencies\" nhằm mục đích giảm dung lượng cho máy chủ sản xuất.",
      "Lệnh này thực hiện việc quét toàn bộ hệ thống để tìm kiếm và xóa bỏ các phiên bản thư viện cũ đã lỗi thời, sau đó tự động thay thế chúng bằng các phiên bản mới nhất từ kho lưu trữ npm.",
      "Lệnh này sẽ kích hoạt chế độ hiệu suất cao cho các thư viện hiện có, cho phép chúng sử dụng tối đa sức mạnh của bộ vi xử lý để xử lý các yêu cầu từ phía người dùng một cách nhanh nhất."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ - Node Module",
    "ans": 1
  },
  {
    "q": "Mục đích của lệnh \"npm audit\" trong quy trình phát triển là gì?",
    "opts": [
      "Dùng để phân tích các gói phụ thuộc trong dự án nhằm phát hiện ra các lỗ hổng bảo mật đã được công bố và cung cấp các báo cáo chi tiết kèm theo hướng dẫn để khắc phục các lỗi đó.",
      "Dùng để đếm tổng số dòng mã lệnh có trong toàn bộ dự án và thống kê tỷ lệ phần trăm đóng góp của từng thành viên trong nhóm phát triển thông qua các biểu đồ trực quan sinh động.",
      "Dùng để kiểm tra hiệu suất thực thi của các đoạn mã lệnh trong ứng dụng và đưa ra các đề xuất tối ưu hóa để ứng dụng có thể chạy nhanh hơn trên các thiết bị di động cấu hình yếu.",
      "Dùng để tự động gửi báo cáo lỗi của ứng dụng về máy chủ quản trị của npm mỗi khi ứng dụng gặp sự cố hoặc bị treo trong quá trình người dùng cuối đang thực hiện các thao tác trên web."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ - Node Module",
    "ans": 0
  },
  {
    "q": "Phần \"scripts\" trong tệp package.json được sử dụng để làm gì?",
    "opts": [
      "Dùng để lưu trữ các đoạn mã CSS và HTML giúp định dạng giao diện cho ứng dụng quản lý gói npm mỗi khi người dùng truy cập vào bảng điều khiển thông qua trình duyệt web.",
      "Dùng để định nghĩa các lệnh tắt (alias) cho các tác vụ thường xuyên lặp lại trong dự án như khởi động máy chủ, chạy kiểm thử hoặc biên dịch mã nguồn một cách nhanh chóng.",
      "Dùng để lưu trữ các câu lệnh SQL phục vụ cho việc khởi tạo cấu trúc cơ sở dữ liệu và nạp dữ liệu mẫu vào ứng dụng trong lần đầu tiên cài đặt môi trường phát triển trên máy tính mới.",
      "Dùng để viết các đoạn ghi chú và hướng dẫn sử dụng chi tiết cho các lập trình viên khác trong nhóm, giúp họ hiểu rõ hơn về logic xử lý của từng mô-đun bên trong ứng dụng."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ - Node Module",
    "ans": 1
  },
  {
    "q": "Semantic Versioning (SemVer) với định dạng \"X.Y.Z\" được hiểu như thế nào?",
    "opts": [
      "X là phiên bản dành cho máy tính cá nhân, Y là phiên bản dành cho máy chủ đám mây, và Z là phiên bản dùng thử dành cho những người dùng muốn trải nghiệm trước các tính năng mới.",
      "X là phiên bản chính (Major) có thay đổi lớn phá vỡ tính tương thích, Y là phiên bản phụ (Minor) bổ sung tính năng, và Z là phiên bản vá lỗi (Patch) giúp sửa các lỗi nhỏ phát sinh.",
      "X là năm phát hành, Y là tháng phát hành, và Z là số thứ tự của bản cập nhật trong tháng đó nhằm giúp lập trình viên dễ dàng theo dõi lịch sử phát triển của thư viện theo thời gian.",
      "X đại diện cho mức độ bảo mật của gói, Y đại diện cho tốc độ thực thi của các đoạn mã lệnh, và Z đại diện cho độ bao phủ kiểm thử (test coverage) hiện có của thư viện đó trong thực tế."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ - Node Module",
    "ans": 1
  },
  {
    "q": "Tại sao thư mục \"node_modules\" thường được liệt kê trong tệp \".gitignore\"?",
    "opts": [
      "Vì thư mục này chứa các thông tin nhạy cảm và bí mật kinh doanh của dự án nên lập trình viên cần phải ẩn nó đi để ngăn chặn việc bị đánh cắp mã nguồn khi đẩy lên các kho lưu trữ công khai.",
      "Vì thư mục này có dung lượng rất lớn và có thể được tái tạo lại hoàn toàn từ tệp package.json bằng lệnh cài đặt, do đó việc đẩy nó lên hệ thống quản lý phiên bản là không cần thiết và lãng phí bộ nhớ.",
      "Vì hệ thống Git không hỗ trợ việc quản lý các tệp tin có cấu trúc lồng ghép phức tạp và sẽ tự động báo lỗi nếu lập trình viên cố tình đưa thư mục này vào trong quá trình đồng bộ hóa mã nguồn.",
      "Vì các thư viện trong thư mục này chỉ có tác dụng trên máy tính của người tạo ra dự án và hoàn toàn không có khả năng hoạt động trên các máy tính của những thành viên khác trong cùng một nhóm."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ - Node Module",
    "ans": 1
  },
  {
    "q": "\"Peer dependencies\" thường được sử dụng trong trường hợp nào?",
    "opts": [
      "Khi một gói thư viện yêu cầu người dùng phải cài đặt thêm một gói thư viện khác với một phiên bản cụ thể để nó có thể hoạt động chính xác trong môi trường của ứng dụng chủ.",
      "Khi lập trình viên muốn thiết lập mối quan hệ đồng cấp giữa các mô-đun trong dự án để chúng có thể chia sẻ dữ liệu toàn cục với nhau mà không cần thông qua các lệnh nhập mã nguồn.",
      "Khi ứng dụng cần thực hiện việc kết nối với các thiết bị phần cứng cùng cấp trong mạng nội bộ để thực hiện việc tính toán song song và chia sẻ gánh nặng xử lý cho máy chủ trung tâm.",
      "Khi một gói thư viện chứa các đoạn mã lệnh bị trùng lặp với các gói khác và hệ thống cần phải thực hiện việc gộp chúng lại thành một thực thể duy nhất để tiết kiệm tài nguyên bộ nhớ đệm."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ - Node Module",
    "ans": 0
  },
  {
    "q": "Lệnh \"npm outdated\" có chức năng chính là gì?",
    "opts": [
      "Dùng để liệt kê tất cả các tệp tin mã nguồn trong dự án đã quá lâu không được chỉnh sửa và đưa ra các cảnh báo về việc mã nguồn có thể bị lỗi do không tương thích với phiên bản Node.js hiện tại.",
      "Dùng để kiểm tra trạng thái kết nối internet của máy tính và thông báo cho lập trình viên biết nếu kho lưu trữ của npm đang gặp sự cố kỹ thuật hoặc đang trong quá trình bảo trì định kỳ.",
      "Dùng để kiểm tra các gói phụ thuộc hiện có và liệt kê danh sách các gói đã có phiên bản mới hơn trên kho lưu trữ trực tuyến của npm để lập trình viên có thể cân nhắc việc thực hiện cập nhật.",
      "Dùng để tự động xóa bỏ các đoạn mã lệnh không còn được sử dụng trong ứng dụng (dead code) nhằm mục đích làm sạch dự án và tăng tốc độ thực thi cho các tác vụ xử lý dữ liệu phức tạp."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ - Node Module",
    "ans": 2
  },
  {
    "q": "Sự khác biệt lớn nhất giữa npm và các trình quản lý gói khác như Yarn hay pnpm là gì?",
    "opts": [
      "npm chỉ có thể hoạt động trên môi trường dòng lệnh của hệ điều hành Windows, còn Yarn và pnpm được thiết kế chuyên biệt để chỉ hoạt động trên các hệ điều hành mã nguồn mở như Linux hay macOS.",
      "npm là trình quản lý duy nhất hỗ trợ ngôn ngữ JavaScript, trong khi Yarn và pnpm được thiết kế để chỉ phục vụ cho việc quản lý mã nguồn của các ngôn ngữ lập trình khác như Python hay Java.",
      "Các trình quản lý gói như Yarn hay pnpm thường tập trung vào việc cải thiện tốc độ cài đặt gói thông qua cơ chế lưu trữ đệm hiệu quả hơn và cách thức quản lý cấu trúc thư mục node_modules tối ưu hơn.",
      "Yarn và pnpm yêu cầu người dùng phải trả phí thuê bao hàng năm để sử dụng các tính năng nâng cao, trong khi npm hoàn toàn miễn phí cho tất cả mọi đối tượng lập trình viên trên toàn thế giới."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ - Node Module",
    "ans": 2
  },
  {
    "q": "Tệp tin \".npmrc\" được sử dụng nhằm mục đích gì?",
    "opts": [
      "Dùng để thiết lập các cấu hình tùy chỉnh cho npm tại các cấp độ khác nhau (dự án, người dùng hoặc toàn hệ thống), ví dụ như thay đổi địa chỉ của kho lưu trữ gói hoặc cấu hình proxy mạng.",
      "Dùng để lưu trữ các đoạn mã lệnh bí mật phục vụ cho việc mã hóa dữ liệu đường truyền giữa máy chủ npm và máy tính cá nhân của lập trình viên trong suốt quá trình tải các thư viện về máy.",
      "Dùng để ghi lại toàn bộ nhật ký các lỗi phát sinh trong quá trình cài đặt gói và tự động gửi các báo cáo này về cho nhà phát triển hệ điều hành để họ có thể thực hiện việc sửa lỗi từ xa.",
      "Dùng để lưu trữ các thông tin về quyền sở hữu trí tuệ và các giấy phép bản quyền của tất cả các thư viện bên ngoài đang được sử dụng trong ứng dụng để phục vụ cho các mục đích pháp lý."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ - Node Module",
    "ans": 0
  },
  {
    "q": "Lệnh \"npm install <tên_gói>\" mà không kèm theo cờ nào sẽ mặc định thực hiện điều gì?",
    "opts": [
      "Hệ thống sẽ tải gói thư viện đó về và cài đặt nó vào danh sách các gói toàn cục (global) để tất cả các dự án khác trên máy tính đều có thể sử dụng chung một cách dễ dàng và nhanh chóng.",
      "Hệ thống sẽ cài đặt gói đó vào thư mục node_modules của dự án hiện tại và tự động cập nhật tên của gói cùng phiên bản vào mục \"dependencies\" bên trong tệp tin cấu hình package.json.",
      "Hệ thống chỉ thực hiện việc tải mã nguồn của gói đó về máy tính dưới định dạng tệp nén và chờ đợi lệnh giải nén thủ công từ phía lập trình viên trước khi chính thức đưa vào sử dụng trong mã nguồn.",
      "Hệ thống sẽ xóa bỏ gói thư viện đó khỏi dự án hiện tại nếu phát hiện thấy nó đã tồn tại từ trước nhằm mục đích đảm bảo rằng ứng dụng luôn sử dụng phiên bản gốc ban đầu của thư viện đó."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ - Node Module",
    "ans": 1
  },
  {
    "q": "Tác động của việc thư mục \"node_modules\" bị quá nặng (bloat) là gì?",
    "opts": [
      "Đây thực chất là một tính năng của Node.js giúp máy tính của lập trình viên có thể xử lý các tác vụ phức tạp nhanh hơn thông qua việc lưu trữ sẵn các kết quả tính toán vào trong các tệp tin rác.",
      "Việc này xảy ra do cơ chế cài đặt các gói phụ thuộc lồng nhau, có thể dẫn đến việc tốn kém rất nhiều dung lượng đĩa cứng và làm chậm các thao tác sao chép hoặc quét virus trên thư mục dự án.",
      "Việc thư mục quá nặng sẽ giúp cho ứng dụng web của người dùng cuối có tốc độ tải trang nhanh hơn gấp nhiều lần vì toàn bộ thư viện đã được máy chủ Node.js tối ưu hóa một cách triệt để nhất.",
      "Đây là dấu hiệu cho thấy phần cứng máy tính của lập trình viên đang gặp sự cố và cần phải thực hiện việc thay thế ổ đĩa cứng mới có dung lượng lớn hơn để đảm bảo tính ổn định cho dự án Node.js."
    ],
    "chapter": "Chương 3: Lập trình bất đồng bộ - Node Module",
    "ans": 1
  },
  {
    "q": "Kiến trúc hướng sự kiện (Event-Driven Architecture) trong Node.js được hiểu như thế nào là chính xác nhất?",
    "opts": [
      "Đây là một mô hình lập trình mà trong đó luồng thực thi của chương trình được quyết định bởi các sự kiện như thao tác của người dùng, đầu ra của cảm biến hoặc thông điệp từ các chương trình khác.",
      "Đây là mô hình lập trình tập trung vào việc thực thi các đoạn mã lệnh theo một thứ tự tuyến tính cố định từ trên xuống dưới và không cho phép bất kỳ sự ngắt quãng nào xảy ra trong quá trình chạy.",
      "Đây là một kỹ thuật lập trình cho phép ứng dụng Node.js có thể tự động tạo ra hàng loạt các luồng (threads) mới mỗi khi có một yêu cầu truy cập dữ liệu từ phía người dùng gửi tới máy chủ.",
      "Đây là một cấu trúc dữ liệu đặc biệt dùng để lưu trữ các tệp tin hình ảnh và video dưới dạng các sự kiện nhị phân nhằm mục đích tối ưu hóa dung lượng bộ nhớ đệm cho các ứng dụng đa phương tiện."
    ],
    "chapter": "Chương 3.3: Kiến trúc hướng sự kiện",
    "ans": 0
  },
  {
    "q": "Lớp nào trong thư viện lõi của Node.js đóng vai trò trung tâm của kiến trúc hướng sự kiện?",
    "opts": [
      "Lớp EventEmitter nằm trong mô-đun events, cung cấp các phương thức cần thiết để định nghĩa, phát ra các sự kiện tùy chỉnh và đăng ký các hàm lắng nghe tương ứng cho các sự kiện đó.",
      "Lớp ProcessGlobal chịu trách nhiệm quản lý toàn bộ các biến môi trường của hệ thống và tự động phát ra các cảnh báo bảo mật khi có một tiến trình lạ cố gắng can thiệp vào mã nguồn ứng dụng.",
      "Lớp FileSystem nằm trong mô hình mô-đun fs, chịu trách nhiệm quản lý việc đọc và ghi dữ liệu đồng thời phát ra các tín hiệu khi quá trình tương tác với ổ đĩa vật lý hoàn tất thành công.",
      "Lớp HttpInternal được thiết kế để quản lý các kết nối mạng và chỉ có khả năng phát ra các sự kiện liên quan đến giao thức truyền tải văn bản siêu văn bản giữa máy chủ và trình duyệt web."
    ],
    "chapter": "Chương 3.3: Kiến trúc hướng sự kiện",
    "ans": 0
  },
  {
    "q": "Phương thức nào được sử dụng để kích hoạt (phát ra) một sự kiện cụ thể trong Node.js?",
    "opts": [
      "Lập trình viên sử dụng phương thức .on() và truyền vào tên của sự kiện cùng với các dữ liệu liên quan để yêu cầu hệ thống bắt đầu quá trình thực thi các hàm xử lý logic tương ứng của sự kiện.",
      "Lập trình viên sử dụng phương thức .emit() đi kèm với tên sự kiện để thông báo cho hệ thống rằng một sự kiện đã xảy ra, từ đó kích hoạt tất cả các trình lắng nghe đã đăng ký cho sự kiện đó.",
      "Lập trình viên sử dụng phương thức .trigger() vốn là một tiêu chuẩn của các thư viện phía khách (frontend) để yêu cầu Node.js thực hiện việc gửi thông báo đến các đối tượng đang quan tâm.",
      "Lập trình viên sử dụng phương thức .send() để chuyển tiếp các thông điệp sự kiện từ đối tượng phát đến đối tượng nhận thông qua các kênh giao tiếp bảo mật được thiết lập sẵn trong bộ nhớ."
    ],
    "chapter": "Chương 3.3: Kiến trúc hướng sự kiện",
    "ans": 1
  },
  {
    "q": "Điểm khác biệt giữa phương thức .on() và .once() khi đăng ký trình lắng nghe là gì?",
    "opts": [
      "Phương thức .on() sẽ lắng nghe sự kiện vô số lần mỗi khi nó được phát ra, trong khi .once() sẽ tự động hủy đăng ký ngay sau khi sự kiện đó được thực thi lần đầu tiên thành công.",
      "Phương thức .on() được dùng cho các sự kiện đồng bộ, còn phương thức .once() được thiết kế chuyên biệt để chỉ làm việc với các tác vụ bất đồng bộ đòi hỏi thời gian xử lý dữ liệu lâu dài.",
      "Phương thức .on() yêu cầu lập trình viên phải cung cấp một hàm callback có tên, trong khi .once() chỉ chấp nhận các hàm ẩn danh (anonymous functions) để đảm bảo tính bảo mật cho ứng dụng.",
      "Không có sự khác biệt thực tế nào về cách hoạt động giữa hai phương thức này, chúng chỉ được thiết kế để làm phong phú thêm cú pháp lệnh giúp mã nguồn trông chuyên nghiệp hơn trong mắt người đọc."
    ],
    "chapter": "Chương 3.3: Kiến trúc hướng sự kiện",
    "ans": 0
  },
  {
    "q": "Mặc định, các trình lắng nghe sự kiện (listeners) trong Node.js được thực thi theo cơ chế nào?",
    "opts": [
      "Các trình lắng nghe sẽ được thực thi một cách bất đồng bộ thông qua hàng đợi microtask để đảm bảo rằng luồng chính của chương trình không bao giờ bị chặn bởi các tác vụ xử lý sự kiện nặng.",
      "Các trình lắng nghe sự kiện sẽ được gọi một cách đồng bộ theo đúng thứ tự mà chúng đã được đăng ký, nghĩa là chương trình sẽ đợi trình lắng nghe này xong mới chuyển sang trình tiếp theo.",
      "Các trình lắng nghe sẽ được thực thi song song trên các luồng xử lý khác nhau của CPU để tối ưu hóa hiệu suất tính toán và giảm thiểu thời gian phản hồi cho các ứng dụng có nhiều người dùng.",
      "Thứ tự thực thi của các trình lắng nghe là hoàn toàn ngẫu nhiên và không thể dự đoán trước, do Node.js sử dụng thuật toán xáo trộn để tránh việc một trình lắng nghe chiếm dụng quá nhiều tài nguyên."
    ],
    "chapter": "Chương 3.3: Kiến trúc hướng sự kiện",
    "ans": 1
  },
  {
    "q": "Làm thế nào để đảm bảo một trình lắng nghe sự kiện được thực thi bất đồng bộ?",
    "opts": [
      "Lập trình viên có thể sử dụng các hàm như setImmediate() hoặc process.nextTick() bên trong trình lắng nghe để bao bọc các đoạn mã xử lý, giúp đẩy việc thực thi xuống hàng đợi sự kiện.",
      "Lập trình viên chỉ cần khai báo hàm lắng nghe bằng từ khóa async, hệ thống sẽ tự động chuyển đổi toàn bộ cơ chế phát sự kiện của EventEmitter sang chế độ không chặn một cách mặc định.",
      "Lập trình viên phải cài đặt thêm một thư viện quản lý luồng từ bên ngoài và thực hiện việc nạp mô-đun đó vào dự án trước khi thực hiện việc đăng ký trình lắng nghe cho các đối tượng EventEmitter.",
      "Node.js không cho phép thực thi bất đồng bộ các trình lắng nghe sự kiện vì điều này sẽ làm hỏng cấu trúc hướng sự kiện và gây ra các lỗi nghiêm trọng liên quan đến việc rò rỉ bộ nhớ hệ thống."
    ],
    "chapter": "Chương 3.3: Kiến trúc hướng sự kiện",
    "ans": 0
  },
  {
    "q": "Khi một sự kiện được phát ra kèm theo các tham số, các trình lắng nghe sẽ nhận dữ liệu đó như thế nào?",
    "opts": [
      "Tất cả các tham số sẽ được hệ thống gộp lại thành một mảng duy nhất và trình lắng nghe phải thực hiện việc trích xuất dữ liệu bằng kỹ thuật destructuring thì mới có thể sử dụng được.",
      "Các tham số được truyền vào phương thức .emit() sau tên sự kiện sẽ được chuyển thành các đối số tương ứng cho hàm callback của trình lắng nghe theo đúng thứ tự mà chúng được phát đi.",
      "Các tham số truyền vào sẽ tự động được mã hóa thành định dạng JSON và lưu trữ vào bộ nhớ đệm của máy chủ, trình lắng nghe cần phải thực hiện giải mã trước khi tiến hành xử lý logic.",
      "Trình lắng nghe không thể nhận trực tiếp tham số mà phải truy cập thông qua một đối tượng toàn cục có tên là event.data để lấy về các thông tin được gửi kèm theo trong quá trình phát sự kiện."
    ],
    "chapter": "Chương 3.3: Kiến trúc hướng sự kiện",
    "ans": 1
  },
  {
    "q": "Sự kiện tên là 'error' có đặc điểm gì đặc biệt trong lớp EventEmitter?",
    "opts": [
      "Sự kiện 'error' chỉ có thể được phát ra bởi hệ điều hành và lập trình viên không được phép tự định nghĩa hoặc kích hoạt sự kiện này bên trong mã nguồn JavaScript của mình vì lý do bảo mật.",
      "Khi sự kiện 'error' xảy ra, Node.js sẽ tự động khởi động lại toàn bộ máy chủ và xóa sạch các biến môi trường hiện tại để đảm bảo rằng lỗi không gây ảnh hưởng đến các phiên làm việc của người dùng.",
      "Đây là một sự kiện thông thường giống như mọi sự kiện khác và nếu không có trình lắng nghe nào được đăng ký thì hệ thống sẽ bỏ qua và tiếp tục thực hiện các tác vụ tiếp theo của ứng dụng.",
      "Nếu một sự kiện 'error' được phát ra mà không có ít nhất một trình lắng nghe nào đăng ký để xử lý, Node.js sẽ in thông báo lỗi ra màn hình và ngay lập tức dừng tiến trình đang chạy của ứng dụng."
    ],
    "chapter": "Chương 3.3: Kiến trúc hướng sự kiện",
    "ans": 3
  },
  {
    "q": "Giới hạn mặc định của số lượng trình lắng nghe (listeners) cho mỗi sự kiện là bao nhiêu?",
    "opts": [
      "Mặc định Node.js giới hạn tối đa là 10 trình lắng nghe cho mỗi sự kiện đơn lẻ; nếu vượt quá con số này, hệ thống sẽ in ra một cảnh báo trong bảng điều khiển để giúp lập trình viên phát hiện rò rỉ bộ nhớ.",
      "Node.js không đặt ra bất kỳ giới hạn nào về số lượng trình lắng nghe nhằm cho phép các ứng dụng có thể mở rộng quy mô một cách tối đa mà không gặp phải các rào cản về mặt kỹ thuật phần mềm.",
      "Mỗi sự kiện chỉ được phép có duy nhất một trình lắng nghe hoạt động tại một thời điểm nhất định để đảm bảo rằng các luồng dữ liệu không bị xung đột hoặc gây ra các sai lệch về mặt logic tính toán.",
      "Giới hạn mặc định được thiết lập dựa trên số lượng nhân vật lý của bộ vi xử lý máy chủ, ví dụ nếu máy chủ có 4 nhân thì mỗi sự kiện sẽ được phép đăng ký tối đa là 4 trình lắng nghe tương ứng."
    ],
    "chapter": "Chương 3.3: Kiến trúc hướng sự kiện",
    "ans": 0
  },
  {
    "q": "Phương thức .removeListener() hoặc .off() yêu cầu tham số gì để hoạt động chính xác?",
    "opts": [
      "Chỉ cần truyền vào tên của sự kiện cần xóa và hệ thống sẽ tự động loại bỏ toàn bộ các trình lắng nghe đang hoạt động của sự kiện đó để giải phóng tài nguyên bộ nhớ cho ứng dụng.",
      "Yêu cầu truyền vào tên của sự kiện và một tham chiếu chính xác đến hàm callback đã được đăng ký trước đó, vì một sự kiện có thể sở hữu nhiều trình lắng nghe khác nhau hoạt động đồng thời.",
      "Yêu cầu người dùng phải cung cấp mã định danh duy nhất (ID) của trình lắng nghe vốn được hệ thống trả về ngay sau khi thực hiện thao tác đăng ký sự kiện thành công bằng phương thức .on().",
      "Lập trình viên phải cung cấp mật khẩu quản trị hệ thống bên trong các tham số của phương thức để xác nhận rằng hành động xóa trình lắng nghe là một thao tác hợp lệ và an toàn cho máy chủ."
    ],
    "chapter": "Chương 3.3: Kiến trúc hướng sự kiện",
    "ans": 1
  },
  {
    "q": "Làm thế nào để một lớp tự định nghĩa có thể sử dụng được các tính năng của EventEmitter?",
    "opts": [
      "Lập trình viên cần thực hiện việc sao chép toàn bộ mã nguồn của mô-đun events vào bên trong lớp của mình và thực hiện chỉnh sửa lại các tên biến để tránh các xung đột về mặt cú pháp lệnh.",
      "Lớp tự định nghĩa cần kế thừa (extends) từ lớp EventEmitter của thư viện lõi, điều này cho phép các thực thể của lớp đó có thể phát và lắng nghe các sự kiện giống như các đối tượng Node.js khác.",
      "Lập trình viên phải sử dụng kỹ thuật \"Dependency Injection\" để truyền một đối tượng EventEmitter vào trong hàm khởi tạo của lớp và lưu trữ nó dưới dạng một thuộc tính riêng tư của đối tượng.",
      "Chỉ các lớp được tích hợp sẵn trong nhân của Node.js mới có quyền sử dụng các tính năng hướng sự kiện, các lớp do người dùng tự định nghĩa sẽ bị hệ thống từ chối nếu cố tình kế thừa."
    ],
    "chapter": "Chương 3.3: Kiến trúc hướng sự kiện",
    "ans": 1
  },
  {
    "q": "Ưu điểm chính của kiến trúc hướng sự kiện so với việc sử dụng callback đơn thuần là gì?",
    "opts": [
      "Việc sử dụng sự kiện đảm bảo rằng dữ liệu sẽ luôn được mã hóa an toàn trước khi được gửi đi, trong khi sử dụng callback truyền thống lại tiềm ẩn nhiều nguy cơ về bảo mật thông tin nhạy cảm.",
      "Kiến trúc hướng sự kiện giúp giảm bớt sự phụ thuộc lẫn nhau (decoupling) giữa các thành phần của hệ thống, cho phép nhiều bộ phận khác nhau cùng phản hồi một sự kiện mà không cần biết về nhau.",
      "Kiến trúc hướng sự kiện giúp mã nguồn thực thi nhanh hơn nhiều lần vì nó loại bỏ hoàn toàn nhu cầu sử dụng các biến toàn cục và các cấu trúc điều khiển logic phức tạp như if...else hay switch.",
      "Kiến trúc hướng sự kiện cho phép ứng dụng vẫn hoạt động bình thường ngay cả khi bộ vi xử lý trung tâm (CPU) bị lỗi hoặc hệ điều hành của máy chủ gặp phải các sự cố kỹ thuật nghiêm trọng."
    ],
    "chapter": "Chương 3.3: Kiến trúc hướng sự kiện",
    "ans": 1
  },
  {
    "q": "Khi sử dụng phương thức .prependListener(), trình lắng nghe sẽ được đặt ở vị trí nào?",
    "opts": [
      "Hệ thống sẽ thực hiện việc sắp xếp lại danh sách các trình lắng nghe dựa trên bảng chữ cái của tên hàm và đặt trình lắng nghe mới vào vị trí phù hợp nhất để tối ưu hóa việc tìm kiếm.",
      "Trình lắng nghe mới sẽ được đặt ở vị trí cuối cùng trong danh sách các trình lắng nghe hiện có, đảm bảo rằng nó sẽ là hàm cuối cùng được thực hiện sau khi các hàm cũ đã chạy xong.",
      "Trình lắng nghe mới sẽ được đưa lên vị trí đầu tiên của danh sách, đồng nghĩa với việc nó sẽ được hệ thống ưu tiên thực thi trước tất cả các trình lắng nghe đã được đăng ký từ trước đó.",
      "Phương thức này sẽ xóa bỏ toàn bộ danh sách các trình lắng nghe cũ và chỉ giữ lại duy nhất trình lắng nghe mới này để đảm bảo rằng không có sự chồng chéo trong việc xử lý các sự kiện."
    ],
    "chapter": "Chương 3.3: Kiến trúc hướng sự kiện",
    "ans": 2
  },
  {
    "q": "Phương thức emitter.listenerCount(eventName) dùng để làm gì?",
    "opts": [
      "Dùng để đếm tổng số lần mà một sự kiện cụ thể đã được phát ra (emit) kể từ khi ứng dụng bắt đầu khởi chạy cho đến thời điểm hiện tại để phục vụ mục đích thống kê hiệu năng hệ thống.",
      "Dùng để trả về số lượng các trình lắng nghe hiện đang được đăng ký cho một sự kiện cụ thể, giúp lập trình viên kiểm soát được quy mô xử lý và phát hiện các trình lắng nghe thừa.",
      "Dùng để tính toán dung lượng bộ nhớ mà mỗi trình lắng nghe đang chiếm dụng trong hệ thống và đưa ra các cảnh báo nếu tổng dung lượng vượt quá giới hạn cho phép của máy chủ web.",
      "Dùng để xác định số lượng các đối tượng khác nhau trên toàn hệ thống đang thực hiện việc lắng nghe sự kiện này một cách đồng thời thông qua các kết nối mạng không dây từ xa."
    ],
    "chapter": "Chương 3.3: Kiến trúc hướng sự kiện",
    "ans": 1
  },
  {
    "q": "Điều gì xảy ra nếu bạn phát ra một sự kiện mà không có trình lắng nghe nào đăng ký (ngoại trừ sự kiện 'error')?",
    "opts": [
      "Node.js sẽ ngay lập tức dừng tiến trình và thông báo một lỗi nghiêm trọng vì hệ thống coi việc phát sự kiện không có người nhận là một hành vi lãng phí tài nguyên CPU của máy chủ.",
      "Sự kiện đó sẽ được phát ra bình thường nhưng không có hành động nào được thực hiện; hệ thống đơn giản là sẽ bỏ qua nó và tiếp tục thực hiện các dòng mã lệnh tiếp theo của chương trình.",
      "Sự kiện sẽ được lưu trữ vào một hàng đợi tạm thời và hệ thống sẽ liên tục kiểm tra cho đến khi có một trình lắng nghe được đăng ký thì mới chính thức kích hoạt việc xử lý dữ liệu liên quan.",
      "Node.js sẽ tự động tạo ra một trình lắng nghe mặc định để ghi lại thông tin về sự kiện đó vào tệp tin nhật ký hệ thống nhằm giúp lập trình viên có thể tra cứu lại các sự kiện bị bỏ lỡ sau này."
    ],
    "chapter": "Chương 3.3: Kiến trúc hướng sự kiện",
    "ans": 1
  },
  {
    "q": "Một thực thể của HTTP Server trong Node.js phát ra sự kiện 'request' khi nào?",
    "opts": [
      "Mỗi khi có một yêu cầu HTTP mới được gửi tới máy chủ, sự kiện này cho phép lập trình viên truy cập vào các đối tượng request và response để thực hiện việc xử lý logic và trả về kết quả.",
      "Mỗi khi máy chủ gặp sự cố về đường truyền internet hoặc bị quá tải do có quá nhiều người dùng truy cập cùng một lúc dẫn đến việc không thể phản hồi các yêu cầu dữ liệu một cách kịp thời.",
      "Mỗi khi máy chủ được khởi động thành công và sẵn sàng nhận các kết nối từ phía trình duyệt của người dùng thông qua các cổng giao tiếp mạng đã được thiết lập từ trước trong cấu hình.",
      "Mỗi khi tệp tin mã nguồn của ứng dụng máy chủ có sự thay đổi và lập trình viên thực hiện thao tác lưu tệp, hệ thống sẽ phát ra sự kiện này để tự động cập nhật lại các tính năng mới."
    ],
    "chapter": "Chương 3.3: Kiến trúc hướng sự kiện",
    "ans": 0
  },
  {
    "q": "Phương thức emitter.eventNames() trả về kết quả là gì?",
    "opts": [
      "Một chuỗi văn bản duy nhất bao gồm tất cả các tên sự kiện được nối lại với nhau bởi dấu phẩy nhằm phục vụ cho mục đích hiển thị thông tin lên giao diện quản trị của hệ thống máy chủ.",
      "Một danh sách chứa tất cả các chuỗi văn bản đại diện cho tên của các sự kiện hiện đang có ít nhất một trình lắng nghe được đăng ký bên trong đối tượng phát sự kiện (emitter).",
      "Một con số nguyên đại diện cho tổng số lượng tất cả các sự kiện khác nhau mà lập trình viên đã định nghĩa trong mã nguồn của ứng dụng kể từ khi dự án bắt đầu được triển khai thực tế.",
      "Một mảng chứa tất cả các tên của các trình lắng nghe (hàm callback) đang hoạt động để lập trình viên có thể dễ dàng quản lý và kiểm tra xem hàm nào đang chiếm dụng nhiều bộ nhớ nhất."
    ],
    "chapter": "Chương 3.3: Kiến trúc hướng sự kiện",
    "ans": 1
  },
  {
    "q": "Sự khác biệt về mặt kiến trúc giữa mô hình \"Request-Response\" truyền thống và \"Event-Driven\" là gì?",
    "opts": [
      "Mô hình Event-Driven đòi hỏi nhiều tài nguyên phần cứng hơn và có tốc độ xử lý chậm hơn so với mô hình Request-Response do hệ thống phải liên tục kiểm tra các sự kiện đang diễn ra.",
      "Mô hình Request-Response yêu cầu máy khách phải luôn chủ động gửi yêu cầu trước, trong khi Event-Driven cho phép các thành phần của hệ thống phản ứng linh hoạt với các thay đổi trạng thái nội bộ.",
      "Không có bất kỳ sự khác biệt nào về mặt kiến trúc, cả hai đều là những tên gọi khác nhau của cùng một kỹ thuật lập trình JavaScript được sử dụng trong các phiên bản Node.js cũ trước đây.",
      "Mô hình Request-Response chỉ có thể hoạt động trên các mạng nội bộ cục bộ, còn mô hình Event-Driven được thiết kế chuyên biệt để hoạt động trên môi trường internet toàn cầu với độ bảo mật cao."
    ],
    "chapter": "Chương 3.3: Kiến trúc hướng sự kiện",
    "ans": 1
  },
  {
    "q": "Tại sao Event-Driven Architecture lại giúp giảm thiểu \"Mã nguồn cứng\" (Hard-coded logic)?",
    "opts": [
      "Vì nó cho phép lập trình viên có thể thay đổi các tham số của ứng dụng trực tiếp trên bảng điều khiển mà không cần phải thực hiện việc chỉnh sửa lại mã nguồn JavaScript gốc của dự án.",
      "Vì các thành phần chỉ cần phát ra sự kiện khi hoàn thành nhiệm vụ, việc xử lý kết quả đó như thế nào sẽ do các thành phần khác quyết định thông qua việc đăng ký lắng nghe một cách linh hoạt.",
      "Vì hệ thống hướng sự kiện tự động xóa bỏ các đoạn mã lệnh bị trùng lặp và thay thế chúng bằng các hàm xử lý tối ưu hơn dựa trên các thuật toán học máy được tích hợp sẵn trong nhân Node.js.",
      "Vì khi sử dụng sự kiện, lập trình viên bắt buộc phải viết mã nguồn theo các mẫu thiết kế chuẩn quốc tế, từ đó giúp giảm thiểu tối đa các lỗi do con người gây ra trong quá trình phát triển."
    ],
    "chapter": "Chương 3.3: Kiến trúc hướng sự kiện",
    "ans": 1
  },
  {
    "q": "Trong Node.js, Vòng lặp sự kiện (Event Loop) có mối quan hệ gì với EventEmitter?",
    "opts": [
      "EventEmitter và Event Loop là hai thành phần hoàn toàn độc lập và không có bất kỳ mối liên hệ nào với nhau, chúng hoạt động trên các luồng xử lý khác nhau của hệ điều hành máy chủ.",
      "Event Loop là thành phần trực tiếp thực hiện việc phát ra các sự kiện của EventEmitter mỗi khi nó nhận thấy có một thay đổi nhỏ nhất trong cấu trúc dữ liệu của các biến toàn cục trong ứng dụng.",
      "EventEmitter là một cấu trúc cấp cao được xây dựng trên nền tảng của Event Loop, cho phép lập trình viên tương tác với các tác vụ bất đồng bộ một cách dễ dàng hơn thông qua các sự kiện tùy chỉnh.",
      "Event Loop sẽ tự động tạm dừng hoạt động mỗi khi có một phương thức .emit() được thực hiện để đảm bảo rằng toàn bộ tài nguyên CPU sẽ được tập trung cho việc xử lý sự kiện hiện tại."
    ],
    "chapter": "Chương 3.3: Kiến trúc hướng sự kiện",
    "ans": 2
  },
  {
    "q": "Cho đoạn mã sau, kết quả hiển thị ở bảng điều khiển (console) là gì?\nconst EventEmitter = require('events');\nconst myEmitter = new EventEmitter();\nlet result = '';\nmyEmitter.on('process', () => result += '1');\nmyEmitter.on('process', () => result += '2');\nmyEmitter.emit('process');\nconsole.log(result);",
    "opts": [
      "Kết quả in ra là chuỗi văn bản '12' vì trong Node.js, các trình lắng nghe (listeners) cho cùng một sự kiện sẽ được thực thi một cách đồng bộ và theo đúng thứ tự mà chúng đã được đăng ký trước đó.",
      "Kết quả in ra là một chuỗi rỗng vì các trình lắng nghe sự kiện trong Node.js mặc định được thực thi bất đồng bộ, nên lệnh console.log sẽ chạy xong trước khi các trình lắng nghe kịp cập nhật biến.",
      "Kết quả in ra là chuỗi văn bản '21' vì hệ thống ưu tiên thực hiện các trình lắng nghe sự kiện theo thứ tự ngược lại (vào sau ra trước) để đảm bảo các logic mới nhất luôn được xử lý đầu tiên.",
      "Kết quả in ra là chuỗi văn bản '1' vì lớp EventEmitter chỉ cho phép thực thi trình lắng nghe đầu tiên được tìm thấy và tự động bỏ qua tất cả các trình lắng nghe còn lại cho cùng một sự kiện."
    ],
    "chapter": "Chương 3.3: Kiến trúc hướng sự kiện",
    "ans": 0
  },
  {
    "q": "Đoạn mã sử dụng phương thức \".once()\" sau đây trả về giá trị của 'count' là bao nhiêu?\nconst EventEmitter = require('events');\nconst myEmitter = new EventEmitter();\nlet count = 0;\nmyEmitter.once('click', () => count++);\nmyEmitter.emit('click');\nmyEmitter.emit('click');\nconsole.log(count);",
    "opts": [
      "Kết quả trả về là giá trị số 0 vì phương thức once yêu cầu lập trình viên phải cung cấp thêm một tham số điều kiện logic thì mới có thể thực hiện việc kích hoạt các hàm callback xử lý sự kiện.",
      "Hệ thống sẽ báo một lỗi thực thi nghiêm trọng vì chúng ta không được phép gọi phương thức emit nhiều lần cho cùng một tên sự kiện đã được đăng ký bằng phương thức once trong mã nguồn.",
      "Kết quả trả về là giá trị số 2 vì sự kiện 'click' đã được phát đi hai lần liên tiếp bằng phương thức emit, do đó trình lắng nghe sẽ được kích hoạt tương ứng hai lần để tăng biến đếm.",
      "Kết quả trả về là giá trị số 1 vì phương thức once đảm bảo rằng trình lắng nghe chỉ được thực thi duy nhất một lần và hệ thống sẽ tự động hủy đăng ký trình lắng nghe đó ngay sau lần gọi đầu tiên."
    ],
    "chapter": "Chương 3.3: Kiến trúc hướng sự kiện",
    "ans": 3
  },
  {
    "q": "Kết quả in ra màn hình của đoạn mã truyền tham số sau đây là gì?\nconst EventEmitter = require('events');\nconst myEmitter = new EventEmitter();\nmyEmitter.on('calculate', (a, b) => {\n console.log(a * b);\n});\nmyEmitter.emit('calculate', 4, 5);",
    "opts": [
      "Kết quả in ra là giá trị undefined vì hàm lắng nghe sự kiện mặc định chỉ có khả năng nhận diện tên của sự kiện chứ không hỗ trợ việc tiếp nhận các dữ liệu đi kèm từ phương thức emit.",
      "Kết quả in ra là giá trị số 20 vì các tham số truyền vào phương thức emit sau tên sự kiện (4 và 5) sẽ được chuyển thành các đối số tương ứng cho hàm callback của trình lắng nghe sự kiện.",
      "Kết quả in ra là chuỗi văn bản '45' vì trong kiến trúc hướng sự kiện của Node.js, tất cả các đối số truyền vào sẽ mặc định được hệ thống ép kiểu về dạng chuỗi văn bản trước khi thực hiện phép tính.",
      "Kết quả in ra là một mảng dữ liệu [4, 5] vì tất cả các đối số truyền vào sẽ được hệ thống tự động đóng gói lại thành một mảng duy nhất để đảm bảo tính toàn vẹn của dữ liệu trong quá trình truyền tải."
    ],
    "chapter": "Chương 3.3: Kiến trúc hướng sự kiện",
    "ans": 1
  },
  {
    "q": "Chuyện gì xảy ra khi thực thi đoạn mã phát sự kiện lỗi sau đây?\nconst EventEmitter = require('events');\nconst myEmitter = new EventEmitter();\nconsole.log('Bắt đầu');\nmyEmitter.emit('error', new Error('Sự cố'));\nconsole.log('Kết thúc');",
    "opts": [
      "Chương trình sẽ in ra 'Bắt đầu' sau đó in ra 'Kết thúc' vì hệ thống sẽ tự động bỏ qua sự kiện lỗi nếu không tìm thấy trình lắng nghe nào được đăng ký để xử lý lỗi đó một cách tường minh.",
      "Chương trình sẽ in ra 'Bắt đầu' và sau đó ứng dụng sẽ bị crash (thoát tiến trình) kèm theo thông báo lỗi vì sự kiện 'error' nếu không được xử lý sẽ khiến Node.js dừng thực thi ngay lập tức.",
      "Chương trình sẽ chỉ in ra dòng chữ 'Bắt đầu' và sau đó tạm dừng vĩnh viễn để chờ đợi lập trình viên bổ sung thêm trình lắng nghe lỗi vào mã nguồn trước khi có thể tiếp tục thực thi các dòng tiếp theo.",
      "Chương trình sẽ in ra 'Bắt đầu', sau đó in ra nội dung của đối tượng lỗi 'Sự cố' và tiếp tục in ra 'Kết thúc' giống như cách xử lý các sự kiện thông thường khác trong môi trường Node.js."
    ],
    "chapter": "Chương 3.3: Kiến trúc hướng sự kiện",
    "ans": 1
  },
  {
    "q": "Thứ tự in ra của đoạn mã kết hợp giữa logic đồng bộ và bất đồng bộ sau đây là gì?\nconst EventEmitter = require('events');\nconst myEmitter = new EventEmitter();\nmyEmitter.on('run', () => {\n setImmediate(() => console.log('1'));\n console.log('2');\n});\nconsole.log('3');\nmyEmitter.emit('run');\nconsole.log('4');",
    "opts": [
      "Thứ tự in ra là '3', '2', '1', '4' vì khi sự kiện được phát ra, Node.js sẽ ngay lập tức tập trung toàn bộ tài nguyên để xử lý xong mọi logic bên trong trình lắng nghe rồi mới quay lại thực hiện tiếp mã bên ngoài.",
      "Thứ tự in ra là '3', '2', '4', '1' vì lệnh '3' và '4' chạy đồng bộ, trình lắng nghe sự kiện cũng chạy đồng bộ (in '2'), còn lệnh in '1' được đưa vào hàng đợi setImmediate nên sẽ chạy sau cùng.",
      "Thứ tự in ra là '3', '4', '2', '1' vì hệ thống sẽ ưu tiên thực hiện toàn bộ các mã lệnh đồng bộ ở cấp độ cao nhất trước khi bắt đầu kích hoạt việc thực thi các trình lắng nghe sự kiện của đối tượng.",
      "Thứ tự in ra là '1', '2', '3', '4' vì kiến trúc hướng sự kiện sẽ tự động sắp xếp lại tất cả các dòng mã lệnh theo đúng thứ tự logic từ khởi tạo đến thực thi để tránh các xung đột dữ liệu tiềm ẩn."
    ],
    "chapter": "Chương 3.3: Kiến trúc hướng sự kiện",
    "ans": 1
  },
  {
    "q": "Kiến trúc REST (Representational State Transfer) được định nghĩa chính xác nhất là gì?",
    "opts": [
      "REST là một giao thức truyền tải dữ liệu độc lập, hoạt động dựa trên việc mã hóa toàn bộ thông tin người dùng thành các tệp tin nhị phân để tối ưu hóa tốc độ đường truyền internet hiện nay.",
      "REST là một phong cách kiến trúc phần mềm đưa ra các ràng buộc để tạo ra các dịch vụ web có khả năng mở rộng, tập trung vào tài nguyên (resources) và sử dụng các phương thức HTTP tiêu chuẩn.",
      "REST là một thư viện JavaScript chuyên dụng được tích hợp sẵn trong nhân của Node.js nhằm mục đích tự động hóa việc thiết kế các giao diện người dùng mà không cần can thiệp vào mã nguồn backend.",
      "REST là một ngôn ngữ lập trình mới dùng để thay thế cho SQL trong việc truy vấn và quản lý các cơ sở dữ liệu quan hệ phức tạp trên các hệ thống máy chủ chạy hệ điều hành Linux."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Khái niệm \"Resource\" (Tài nguyên) trong mô hình REST được hiểu như thế nào?",
    "opts": [
      "Tài nguyên là bất kỳ thực thể dữ liệu nào có thể được xác định danh tính và thao tác thông qua một địa chỉ URI duy nhất, ví dụ như một người dùng, một bài viết hoặc một sản phẩm.",
      "Tài nguyên là các đoạn mã lệnh JavaScript được lưu trữ trong thư mục node_modules mà ứng dụng cần phải nạp vào bộ nhớ trước khi có thể thực hiện việc phản hồi các yêu cầu HTTP.",
      "Tài nguyên là các phần cứng vật lý của máy chủ như dung lượng RAM hay số lượng nhân CPU mà ứng dụng Node.js đang sử dụng để xử lý các yêu cầu từ phía người dùng cuối.",
      "Tài nguyên là các địa chỉ IP của các máy tính khách đang thực hiện việc kết nối tới máy chủ, giúp hệ thống có thể phân loại và điều hướng luồng dữ liệu một cách chính xác nhất."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Phương thức HTTP \"GET\" có đặc điểm và mục đích sử dụng chính là gì?",
    "opts": [
      "Phương thức này đóng vai trò là một trình kiểm tra bảo mật, nó sẽ quét toàn bộ đường truyền để đảm bảo rằng các thông tin nhạy cảm của người dùng không bị rò rỉ trong quá trình trao đổi.",
      "Phương thức này được sử dụng để gửi dữ liệu từ máy khách lên máy chủ nhằm mục đích tạo mới một tài nguyên hoàn toàn mới trong hệ thống cơ sở dữ liệu của ứng dụng web.",
      "Phương thức này được thiết kế để yêu cầu máy chủ truy xuất và trả về thông tin của một tài nguyên cụ thể, nó được coi là phương thức \"an toàn\" vì không làm thay đổi trạng thái của dữ liệu.",
      "Phương thức này được dùng để xóa bỏ vĩnh viễn một tài nguyên khỏi máy chủ và hệ thống sẽ không trả về bất kỳ dữ liệu nào ngoại trừ mã trạng thái xác nhận việc xóa đã thành công."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Sự khác biệt lớn nhất giữa hai phương thức \"PUT\" và \"PATCH\" là gì?",
    "opts": [
      "Phương thức PUT được dùng để tạo mới tài nguyên hoàn toàn, trong khi PATCH chỉ được dùng để xóa bỏ một phần nhỏ dữ liệu của tài nguyên đó khỏi hệ thống máy chủ hiện tại.",
      "Phương thức PUT chỉ có thể hoạt động được trên các máy chủ Windows, trong khi PATCH là một tiêu chuẩn mới được thiết kế để chỉ hỗ trợ cho các máy chủ chạy hệ điều hành macOS.",
      "Phương thức PUT thực hiện việc thay thế hoàn toàn tài nguyên hiện tại bằng một nội dung mới, còn PATCH chỉ cập nhật một phần các thuộc tính cụ thể của tài nguyên mà không thay thế toàn bộ.",
      "Phương thức PUT có tốc độ thực thi nhanh hơn nhiều so với PATCH do nó không cần phải thực hiện bước kiểm tra các dữ liệu cũ đang tồn tại trong cơ sở dữ liệu của ứng dụng."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Nhóm mã trạng thái HTTP 2xx (ví dụ: 200, 201) đại diện cho điều gì?",
    "opts": [
      "Nhóm mã này thông báo rằng yêu cầu của người dùng đang được chuyển hướng sang một địa chỉ URI khác và trình duyệt cần phải thực hiện lại thao tác kết nối để lấy được dữ liệu.",
      "Nhóm mã này xác nhận rằng yêu cầu của máy khách đã được máy chủ tiếp nhận thành công, được hiểu và được xử lý theo đúng mong muốn của lập trình viên ứng dụng.",
      "Nhóm mã này cảnh báo rằng đã xảy ra một lỗi nghiêm trọng từ phía máy khách, ví dụ như sai cú pháp yêu cầu hoặc người dùng không có quyền truy cập vào tài nguyên đã chọn.",
      "Nhóm mã này đại diện cho các lỗi phát sinh từ phía hệ thống máy chủ, khiến cho máy chủ không thể hoàn thành việc xử lý yêu cầu mặc dù thông tin từ máy khách gửi lên là hợp lệ."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Mã trạng thái \"404 Not Found\" thường xuất hiện trong tình huống nào?",
    "opts": [
      "Khi địa chỉ URI mà máy khách yêu cầu không tồn tại trên máy chủ, có thể do tài nguyên đã bị xóa hoặc người dùng đã nhập sai đường dẫn dẫn tới tài nguyên đó.",
      "Khi máy chủ đang trong quá trình bảo trì định kỳ và không thể tiếp nhận thêm bất kỳ yêu cầu kết nối nào từ phía người dùng cuối cho đến khi quá trình này kết thúc hoàn toàn.",
      "Khi người dùng cố gắng thực hiện một thao tác vượt quá quyền hạn được cấp phép, ví dụ như một khách vãng lai cố gắng xóa bài viết của quản trị viên hệ thống.",
      "Khi máy chủ gặp phải một lỗi logic trong mã nguồn JavaScript khiến cho nó bị treo và không thể gửi trả lại kết quả phản hồi cho trình duyệt web trong thời gian quy định."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Nguyên tắc \"Stateless\" (Không trạng thái) trong kiến trúc REST có nghĩa là gì?",
    "opts": [
      "Mỗi yêu cầu từ máy khách gửi lên máy chủ phải chứa đầy đủ tất cả các thông tin cần thiết để máy chủ hiểu và xử lý, máy chủ không lưu giữ ngữ cảnh của các yêu cầu trước đó.",
      "Lập trình viên không được phép sử dụng bất kỳ loại cơ sở dữ liệu nào để lưu trữ thông tin lâu dài, mọi dữ liệu phải được xóa sạch ngay sau khi phiên làm việc của người dùng kết thúc.",
      "Máy chủ sẽ tự động lưu trữ toàn bộ lịch sử các yêu cầu của người dùng vào bộ nhớ RAM để có thể phục vụ các yêu cầu tiếp theo mà không cần người dùng phải gửi lại thông tin xác thực.",
      "Ứng dụng web sẽ không bao giờ bị dừng hoạt động (down-time) ngay cả khi máy chủ gặp sự cố phần cứng vì trạng thái của ứng dụng luôn được đồng bộ hóa trên toàn thế giới."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Vai trò của \"HTTP Headers\" trong một yêu cầu hoặc phản hồi là gì?",
    "opts": [
      "Headers dùng để lưu trữ nội dung chính của dữ liệu, ví dụ như mã nguồn HTML của trang web hoặc các thông tin chi tiết về sản phẩm mà người dùng muốn xem trên ứng dụng.",
      "Headers cung cấp các thông tin bổ sung (metadata) về yêu cầu hoặc phản hồi, chẳng hạn như loại dữ liệu (Content-Type), thông tin xác thực hoặc các cấu hình lưu bộ nhớ đệm.",
      "Headers là một lớp bảo mật đặc biệt dùng để mã hóa toàn bộ đường truyền internet giữa máy chủ Node.js và các thiết bị di động để ngăn chặn việc đánh cắp dữ liệu cá nhân.",
      "Headers đóng vai trò là một thanh tiêu đề hiển thị trên trình duyệt web để người dùng có thể biết được tên của trang web và biểu tượng favicon của ứng dụng đang truy cập."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Header \"Content-Type\" với giá trị \"application/json\" thông báo điều gì?",
    "opts": [
      "Thông báo rằng máy chủ sẽ trả về một tệp tin hình ảnh dưới dạng nén để trình duyệt web có thể hiển thị trực tiếp lên màn hình mà không cần phải thực hiện việc tải lại trang.",
      "Thông báo rằng nội dung được gửi đi trong thân của gói tin (body) được định dạng theo cấu trúc JSON, giúp các ứng dụng có thể dễ dàng phân tích và xử lý dữ liệu.",
      "Thông báo rằng toàn bộ mã nguồn của trang web sẽ được viết bằng ngôn ngữ Java và người dùng cần phải cài đặt thêm các phần mềm hỗ trợ thì mới có thể xem được nội dung.",
      "Thông báo rằng yêu cầu này chỉ được phép thực hiện thông qua một ứng dụng di động cụ thể và sẽ bị từ chối nếu người dùng truy cập từ các trình duyệt web thông thường trên máy tính."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Tại sao mã trạng thái \"500 Internal Server Error\" lại được coi là lỗi nghiêm trọng?",
    "opts": [
      "Vì lỗi này đại diện cho việc máy chủ đã hết dung lượng lưu trữ trên ổ đĩa cứng và lập trình viên cần phải thực hiện việc xóa bớt các tệp tin cũ để ứng dụng có thể hoạt động trở lại.",
      "Vì lỗi này cho biết rằng đường truyền internet của người dùng đang gặp sự cố và họ cần phải liên hệ với nhà cung cấp dịch vụ mạng để thực hiện việc sửa chữa ngay lập tức.",
      "Vì lỗi này cho thấy máy chủ đã gặp phải một tình huống bất ngờ hoặc một lỗi logic trong mã nguồn khiến nó không thể thực hiện được yêu cầu mặc dù dữ liệu từ khách gửi lên là đúng.",
      "Vì lỗi này thông báo rằng tài khoản của người dùng đã bị khóa vĩnh viễn do vi phạm các chính sách bảo mật của ứng dụng và họ không thể truy cập vào hệ thống được nữa."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Đặc điểm \"Idempotent\" (Tính lũy đẳng) của các phương thức như GET và PUT có nghĩa là gì?",
    "opts": [
      "Có nghĩa là nếu thực hiện cùng một yêu cầu nhiều lần liên tiếp, kết quả cuối cùng đối với trạng thái của hệ thống vẫn sẽ giống như khi chỉ thực hiện yêu cầu đó một lần duy nhất.",
      "Có nghĩa là tốc độ xử lý của yêu cầu sẽ tăng lên gấp đôi sau mỗi lần người dùng thực hiện thao tác tải lại trang web (reload) trên trình duyệt của máy tính cá nhân.",
      "Có nghĩa là hệ thống sẽ tự động tạo ra một bản sao lưu dữ liệu mới cho mỗi lần người dùng gửi yêu cầu lên máy chủ để đảm bảo an toàn tuyệt đối cho thông tin cá nhân.",
      "Có nghĩa là yêu cầu đó chỉ có thể được thực hiện thành công duy nhất một lần và tất cả các lần thử lại sau đó sẽ bị máy chủ từ chối một cách hoàn toàn tự động."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Trong Node.js, mô-đun thư viện lõi nào được sử dụng để xây dựng một HTTP Server cơ bản?",
    "opts": [
      "Mô-đun 'fs' được sử dụng để quản lý các tệp tin và tự động chuyển đổi chúng thành các gói tin HTTP để gửi tới trình duyệt của người dùng thông qua giao thức mạng không dây.",
      "Mô-đun 'http' cung cấp các phương thức và đối tượng cần thiết để tạo ra một máy chủ có khả năng lắng nghe các yêu cầu và gửi trả các phản hồi theo đúng tiêu chuẩn web.",
      "Mô-đun 'path' chịu trách nhiệm xử lý các đường dẫn URI và tự động định tuyến các yêu cầu đến các tệp tin JavaScript tương ứng bên trong cấu trúc thư mục của dự án.",
      "Mô-đun 'events' được sử dụng để tạo ra các sự kiện tùy chỉnh nhằm mục đích thông báo cho người dùng biết khi nào máy chủ bắt đầu quá trình xử lý dữ liệu từ cơ sở dữ liệu."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Đối tượng \"request\" (thường ký hiệu là req) trong hàm xử lý của Node.js chứa thông tin gì?",
    "opts": [
      "Chứa toàn bộ các phương thức dùng để gửi dữ liệu từ máy chủ về cho trình duyệt, bao gồm việc thiết lập mã trạng thái và các tiêu đề phản hồi cho gói tin dữ liệu.",
      "Chứa các thông tin cấu hình của hệ điều hành máy chủ giúp lập trình viên có thể biết được dung lượng bộ nhớ RAM còn trống để tối ưu hóa hiệu suất của ứng dụng.",
      "Chứa các thông tin về yêu cầu đang gửi tới như địa chỉ URL, phương thức HTTP (GET/POST), các tiêu đề (headers) và dữ liệu được gửi từ phía máy khách (body).",
      "Chứa danh sách tất cả các biến môi trường nhạy cảm của dự án nhằm mục đích bảo mật và giúp hệ thống tự động xác thực quyền truy cập của người dùng cuối."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Phương thức \"res.writeHead()\" trong Node.js được dùng để làm gì?",
    "opts": [
      "Dùng để mã hóa toàn bộ dữ liệu phản hồi bằng các thuật toán bảo mật tiên tiến nhất nhằm đảm bảo thông tin không bị đánh cắp trong quá trình truyền tải qua mạng.",
      "Dùng để đóng kết nối giữa máy chủ và máy khách sau khi quá trình trao đổi dữ liệu đã hoàn tất thành công để giải phóng tài nguyên cho hệ điều hành của máy chủ.",
      "Dùng để viết nội dung chính của trang web dưới định dạng HTML và gửi trực tiếp tới màn hình của người dùng để hiển thị các thông tin hình ảnh và văn bản của ứng dụng.",
      "Dùng để thiết lập mã trạng thái HTTP và các tiêu đề phản hồi (response headers) cho gói tin trước khi gửi bất kỳ phần nội dung nào về cho máy khách."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 3
  },
  {
    "q": "Tại sao việc sử dụng URI có tính mô tả (descriptive URIs) lại quan trọng trong REST?",
    "opts": [
      "Vì nó giúp máy chủ có thể xử lý các yêu cầu nhanh hơn bằng cách bỏ qua bước kiểm tra các quy tắc bảo mật phức tạp bên trong cấu trúc mã nguồn của ứng dụng Node.js.",
      "Vì nó bắt buộc người dùng phải ghi nhớ chính xác các đường dẫn dài thì mới có thể truy cập được vào dữ liệu, từ đó giúp tăng cường tính bảo mật cho toàn bộ dự án.",
      "Vì nó giúp cấu trúc của API trở nên rõ ràng, dễ hiểu đối với các lập trình viên khác và phản ánh đúng quan hệ phân cấp giữa các tài nguyên trong hệ thống.",
      "Vì các công cụ tìm kiếm như Google chỉ có thể lập chỉ mục cho các trang web có địa chỉ đường dẫn chứa các ký tự đặc biệt và các con số ngẫu nhiên không có ý nghĩa."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Một kiến trúc hệ thống phân lớp (Layered System) trong REST mang lại lợi ích gì?",
    "opts": [
      "Giúp giảm thiểu tối đa số lượng dòng mã lệnh mà lập trình viên cần phải viết bằng cách tự động chia nhỏ ứng dụng thành hàng nghìn lớp xử lý hoàn toàn độc lập với nhau.",
      "Cho phép chèn thêm các lớp trung gian như máy chủ đệm (cache), máy chủ bảo mật hoặc máy chủ cân bằng tải giữa máy khách và máy chủ mà không làm thay đổi giao diện API.",
      "Đảm bảo rằng ứng dụng sẽ không bao giờ bị lỗi vì nếu một lớp xử lý gặp sự cố thì các lớp khác sẽ tự động thay thế và thực hiện nhiệm vụ của lớp đó một cách hoàn hảo.",
      "Giúp tăng tốc độ xử lý dữ liệu bằng cách nén toàn bộ các lớp lại thành một tệp tin duy nhất để hệ điều hành của máy chủ có thể thực thi mã máy nhanh hơn gấp nhiều lần."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Mã trạng thái \"401 Unauthorized\" và \"403 Forbidden\" khác nhau như thế nào?",
    "opts": [
      "401 có nghĩa là người dùng chưa được xác thực danh tính, còn 403 có nghĩa là người dùng đã xác thực nhưng không có quyền thực hiện thao tác hoặc truy cập tài nguyên này.",
      "401 đại diện cho các lỗi phát sinh do đường truyền internet của người dùng không ổn định, còn 403 đại diện cho các lỗi do máy chủ đang trong quá trình bảo trì định kỳ.",
      "401 là mã lỗi dành riêng cho các ứng dụng di động, trong khi 403 là mã lỗi được thiết kế chuyên biệt để chỉ hiển thị trên các trình duyệt web của máy tính cá nhân.",
      "Không có sự khác biệt thực tế nào giữa hai mã lỗi này, chúng chỉ là những cách gọi khác nhau để thông báo rằng người dùng đã nhập sai mật khẩu đăng nhập vào hệ thống."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Tại sao phương thức \"DELETE\" thường không nên trả về một nội dung lớn (body) trong phản hồi?",
    "opts": [
      "Vì lập trình viên cần phải tiết kiệm băng thông internet tối đa cho máy chủ để ứng dụng có thể hoạt động ổn định hơn trên các thiết bị di động có cấu hình phần cứng yếu.",
      "Vì việc trả về dữ liệu lớn sẽ làm hỏng cấu trúc của cơ sở dữ liệu và khiến cho hệ thống không thể thực hiện việc xóa các tài nguyên khác trong tương lai của dự án.",
      "Vì mục đích chính của yêu cầu đã hoàn thành (xóa tài nguyên), nên thông thường chỉ cần trả về mã trạng thái thành công (như 204 No Content) là đủ cho phía máy khách.",
      "Vì các trình duyệt web hiện đại sẽ tự động chặn các gói tin phản hồi có dung lượng lớn từ các phương thức DELETE để bảo vệ người dùng trước các cuộc tấn công mạng."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Đặc điểm của kiến trúc Client-Server trong mô hình REST là gì?",
    "opts": [
      "Máy chủ và máy khách phải được cài đặt trên cùng một thiết bị vật lý để đảm bảo tốc độ trao đổi dữ liệu luôn đạt mức nhanh nhất và không bị ảnh hưởng bởi đường truyền mạng.",
      "Máy chủ sẽ tự động thực hiện việc cài đặt các bản cập nhật phần mềm mới nhất lên máy tính của người dùng mỗi khi họ truy cập vào ứng dụng thông qua trình duyệt web.",
      "Tách biệt rõ ràng trách nhiệm giữa giao diện người dùng (máy khách) và việc lưu trữ dữ liệu (máy chủ), giúp hai thành phần này có thể phát triển độc lập với nhau.",
      "Máy khách có quyền can thiệp trực tiếp vào mã nguồn và cấu trúc cơ sở dữ liệu của máy chủ để thay đổi các tính năng của ứng dụng theo ý muốn cá nhân của người dùng."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Phương thức \"res.end()\" trong xử lý HTTP của Node.js đóng vai trò gì?",
    "opts": [
      "Dùng để khởi động lại máy chủ mỗi khi có một yêu cầu mới gửi tới nhằm đảm bảo rằng ứng dụng luôn hoạt động với các biến môi trường mới nhất và sạch sẽ nhất.",
      "Thông báo cho máy chủ biết rằng tất cả nội dung phản hồi đã được gửi đi đầy đủ và quá trình trao đổi cho yêu cầu hiện tại cần được kết thúc để hoàn tất gói tin.",
      "Dùng để gửi một tín hiệu cảnh báo tới hệ điều hành rằng ứng dụng đang tiêu tốn quá nhiều tài nguyên và cần được ưu tiên cấp phát thêm bộ nhớ RAM để xử lý dữ liệu.",
      "Dùng để xóa sạch toàn bộ dữ liệu trong bộ nhớ đệm của trình duyệt web để người dùng bắt buộc phải tải lại trang từ đầu trong lần truy cập tiếp theo vào ứng dụng."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Cho đoạn mã xử lý yêu cầu sau, điều gì sẽ xảy ra khi máy chủ nhận được một yêu cầu bất kỳ?\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n res.end('Kết thúc lần 1');\n res.end('Kết thúc lần 2');\n});",
    "opts": [
      "Trình duyệt sẽ hiển thị nội dung \"Kết thúc lần 1Kết thúc lần 2\" vì Node.js sẽ tự động nối tất cả các nội dung truyền vào phương thức end thành một chuỗi duy nhất trước khi gửi về máy khách.",
      "Máy chủ sẽ tự động bỏ qua lệnh thứ hai mà không gây ra bất kỳ lỗi nào, vì quy tắc của Node.js là chỉ chấp nhận lệnh kết thúc đầu tiên và giải phóng tài nguyên ngay lập tức sau đó.",
      "Trình duyệt sẽ hiển thị nội dung \"Kết thúc lần 1\", nhưng ở phía máy chủ, ứng dụng sẽ gặp lỗi \"ERR_HTTP_HEADERS_SENT\" vì lập trình viên cố gắng gửi thêm dữ liệu sau khi phản hồi đã đóng.",
      "Trình duyệt sẽ hiển thị nội dung \"Kết thúc lần 2\" vì trong kiến trúc hướng sự kiện, lệnh thực thi sau cùng luôn có quyền ghi đè lên các giá trị đã được thiết lập bởi các lệnh trước đó."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Dự đoán kết quả hiển thị trên trình duyệt với đoạn mã sử dụng setTimeout sau:\nconst server = http.createServer((req, res) => {\n res.write('A');\n setTimeout(() => {\n  res.write('B');\n  res.end();\n }, 100);\n res.write('C');\n});",
    "opts": [
      "Trình duyệt sẽ báo lỗi kết nối vì việc xen kẽ giữa các lệnh ghi dữ liệu đồng bộ và bất đồng bộ mà không có sự kiểm soát chặt chẽ sẽ khiến gói tin HTTP bị hỏng cấu trúc định dạng.",
      "Trình duyệt sẽ hiển thị chuỗi văn bản \"ABC\" theo đúng thứ tự logic vì Node.js sẽ chờ đợi cho đến khi hàm setTimeout hoàn thành thì mới thực hiện việc gửi toàn bộ gói tin về máy khách.",
      "Trình duyệt sẽ hiển thị chuỗi văn bản \"AC\" và sau đó khoảng 100ms sẽ hiển thị thêm chữ \"B\" (tổng là \"ACB\") vì các lệnh write bên ngoài là đồng bộ, còn lệnh bên trong setTimeout là bất đồng bộ.",
      "Trình duyệt sẽ chỉ hiển thị duy nhất chữ \"A\" vì ngay khi gặp một tác vụ bất đồng bộ như setTimeout, Node.js sẽ mặc định đóng kết nối để bảo vệ tài nguyên hệ thống khỏi việc chờ đợi quá lâu."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Kết quả của biến 'result' sẽ là gì nếu người dùng gửi một yêu cầu với phương thức \"post\" (viết thường) tới đoạn mã sau?\nconst server = http.createServer((req, res) => {\n let result = 'No';\n if (req.method === 'POST') {\n  result = 'Yes';\n }\n res.end(result);\n});",
    "opts": [
      "Giá trị trả về là \"Yes\" vì theo tiêu chuẩn của giao thức HTTP, các tên phương thức không phân biệt chữ hoa chữ thường và Node.js sẽ luôn thực hiện việc so sánh lỏng lẻo đối với thuộc tính này.",
      "Hệ thống sẽ báo lỗi thực thi vì lập trình viên bắt buộc phải sử dụng phương thức toUpperCase() đối với thuộc tính req.method trước khi thực hiện các phép so sánh logic để đảm bảo tính an toàn.",
      "Giá trị trả về là \"Yes\" vì Node.js tự động chuyển đổi tất cả các tên phương thức HTTP sang định dạng viết hoa để lập trình viên có thể so sánh một cách dễ dàng mà không cần lo về định dạng.",
      "Giá trị trả về là \"No\" vì thuộc tính req.method trong Node.js luôn giữ nguyên định dạng mà máy khách gửi lên, và nếu trình duyệt gửi \"post\" thì nó sẽ không khớp với chuỗi \"POST\" do phân biệt chữ hoa thường."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 3
  },
  {
    "q": "Chuyện gì xảy ra khi thực thi đoạn mã thiết lập tiêu đề sai vị trí sau đây?\nconst server = http.createServer((req, res) => {\n res.end('Hello');\n res.setHeader('Content-Type', 'text/plain');\n});",
    "opts": [
      "Phản hồi vẫn được gửi đi bình thường với tiêu đề \"text/plain\" vì Node.js có khả năng tự động sắp xếp lại thứ tự các lệnh thiết lập tiêu đề trước khi gói tin thực tế được truyền qua mạng.",
      "Trình duyệt nhận được chữ \"Hello\", nhưng ở phía máy chủ sẽ xảy ra lỗi \"ERR_HTTP_HEADERS_SENT\" vì bạn không được phép thiết lập hoặc thay đổi các tiêu đề sau khi phản hồi đã được kết thúc.",
      "Máy chủ sẽ tự động bỏ qua lệnh thiết lập tiêu đề và chỉ gửi nội dung văn bản thuần túy về cho trình duyệt mà không kèm theo bất kỳ thông tin mô tả loại dữ liệu nào khác.",
      "Hệ thống sẽ tạm dừng tiến trình và chờ đợi lập trình viên thực hiện việc di chuyển lệnh setHeader lên phía trên lệnh end thì mới cho phép máy chủ tiếp tục hoạt động trở lại."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Giả sử người dùng gửi một yêu cầu POST chứa dữ liệu JSON, kết quả của đoạn mã sau là gì?\nconst server = http.createServer((req, res) => {\n console.log(req.body);\n res.end('Done');\n});",
    "opts": [
      "Bảng điều khiển sẽ in ra giá trị \"undefined\" vì trong mô-đun http thuần của Node.js, đối tượng req là một luồng dữ liệu (stream) và không hề có sẵn thuộc tính body nếu lập trình viên không tự xử lý.",
      "Bảng điều khiển sẽ in ra một chuỗi các ký tự nhị phân đại diện cho dữ liệu gốc mà người dùng gửi lên vì Node.js chỉ cho phép đọc dữ liệu dưới dạng thô để đảm bảo tối ưu hóa hiệu suất bộ nhớ.",
      "Máy chủ sẽ bị treo vĩnh viễn ở trạng thái chờ đợi vì lệnh console.log(req.body) sẽ kích hoạt một vòng lặp vô hạn để tìm kiếm dữ liệu bên trong các gói tin đang được truyền tải qua mạng internet.",
      "Bảng điều khiển sẽ in ra đối tượng dữ liệu JSON đã được phân tách (parsed) hoàn chỉnh vì Node.js mặc định tự động xử lý và chuyển đổi thân của yêu cầu POST thành một thuộc tính có tên là body."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Express.js được định nghĩa chính xác nhất là gì trong hệ sinh thái Node.js?",
    "opts": [
      "Express.js là một thư viện đồ họa chuyên dụng giúp các lập trình viên có thể thiết kế các giao diện người dùng trực quan bằng cách kéo thả các thành phần mà không cần phải viết mã nguồn.",
      "Express.js là một trình quản lý cơ sở dữ liệu quan hệ được tích hợp sẵn vào Node.js nhằm mục đích thay thế hoàn toàn cho các hệ thống như MySQL hay PostgreSQL trong các dự án thực tế.",
      "Express.js là một ngôn ngữ lập trình cấp cao được xây dựng dựa trên cú pháp của JavaScript để chuyên xử lý các thuật toán nén dữ liệu và bảo mật cho các ứng dụng ngân hàng trực tuyến.",
      "Express.js là một khung làm việc (framework) ứng dụng web Node.js tối giản, linh hoạt và không áp đặt (unopinionated), cung cấp các tính năng mạnh mẽ để xây dựng ứng dụng web và API."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 3
  },
  {
    "q": "Tại sao Express được gọi là một framework \"unopinionated\"?",
    "opts": [
      "Vì nó không áp đặt các quy tắc cứng nhắc về cách cấu trúc ứng dụng hoặc các thư viện bổ trợ, cho phép lập trình viên tự do lựa chọn công cụ phù hợp với nhu cầu cụ thể.",
      "Vì nó tự động đưa ra các quyết định thay cho lập trình viên về việc nên sử dụng loại cơ sở dữ liệu nào và cách thức mã hóa dữ liệu nào là an toàn nhất cho người dùng cuối.",
      "Vì nó bắt buộc lập trình viên phải tuân theo một cấu trúc thư mục cực kỳ nghiêm ngặt và không được phép thay đổi tên của bất kỳ tệp tin cấu hình nào trong dự án của mình.",
      "Vì nó chỉ hỗ trợ duy nhất một loại kiến trúc phần mềm cố định và sẽ từ chối thực thi nếu lập trình viên cố tình cài đặt thêm các mô-đun bên ngoài từ kho lưu trữ npm."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Middleware trong Express.js đóng vai trò gì trong vòng đời của một yêu cầu (request)?",
    "opts": [
      "Middleware là các hàm có quyền truy cập vào đối tượng yêu cầu, đối tượng phản hồi và hàm tiếp theo, cho phép thực hiện mã lệnh, thay đổi đối tượng hoặc kết thúc phản hồi.",
      "Middleware đóng vai trò là một lớp phần cứng trung gian giúp tăng tốc độ truyền tải dữ liệu giữa máy chủ và các thiết bị di động thông qua các giao thức mạng không dây tốc độ cao.",
      "Middleware là công cụ dùng để nén toàn bộ mã nguồn của ứng dụng thành một tệp tin duy nhất nhằm mục đích giảm thiểu dung lượng khi triển khai ứng dụng lên môi trường internet.",
      "Middleware là các đoạn mã lệnh chuyên dùng để hiển thị các thông báo lỗi bằng hình ảnh sinh động lên trình duyệt web mỗi khi máy chủ gặp sự cố kỹ thuật hoặc bị quá tải tài nguyên."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Phương thức \"app.use()\" thường được sử dụng nhằm mục đích gì?",
    "opts": [
      "Dùng để kết nối ứng dụng web với các máy chủ lưu trữ hình ảnh từ xa và tự động tải về các tệp tin cần thiết mỗi khi người dùng truy cập vào trang chủ của dự án.",
      "Dùng để định nghĩa một route cụ thể chỉ chấp nhận các yêu cầu HTTP GET từ trình duyệt và sẽ tự động bỏ qua tất cả các yêu cầu khác nếu chúng không chứa thông tin xác thực.",
      "Dùng để đăng ký các hàm middleware cho ứng dụng, các hàm này sẽ được thực thi cho mọi yêu cầu gửi tới máy chủ nếu không được giới hạn bởi một đường dẫn cụ thể nào đó.",
      "Dùng để khởi động máy chủ Node.js và yêu cầu hệ thống phải ưu tiên cấp phát tài nguyên bộ nhớ RAM tối đa cho các tác vụ xử lý dữ liệu từ cơ sở dữ liệu của ứng dụng."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Trong Express, làm thế nào để lấy được tham số đường dẫn (ví dụ: \"id\" trong \"/users/:id\")?",
    "opts": [
      "Sử dụng thuộc tính req.params.id để lấy giá trị của các tham số được định nghĩa bằng dấu hai chấm trong đường dẫn của route đã được lập trình viên thiết lập trước đó.",
      "Sử dụng phương thức req.getBodyParam('id') để yêu cầu máy chủ thực hiện việc tìm kiếm giá trị id bên trong thân của gói tin HTTP được gửi lên từ phía máy khách.",
      "Sử dụng thuộc tính req.query.id để hệ thống tự động trích xuất giá trị từ các tham số nằm sau dấu chấm hỏi trên địa chỉ URL của trình duyệt web người dùng đang sử dụng.",
      "Lập trình viên phải thực hiện việc phân tích chuỗi URL một cách thủ công bằng các hàm xử lý chuỗi của JavaScript để tìm ra vị trí của con số id cần lấy từ địa chỉ web."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Sự khác biệt giữa \"res.send()\" và \"res.json()\" trong Express là gì?",
    "opts": [
      "Phương thức res.send() chỉ dùng để gửi các tệp tin hình ảnh, trong khi res.json() chuyên dùng để gửi các đoạn mã nguồn JavaScript cho trình duyệt web thực thi trực tiếp.",
      "Phương thức res.send() có thể gửi nhiều loại dữ liệu khác nhau, còn res.json() được tối ưu hóa để gửi dữ liệu định dạng JSON và tự động thiết lập Header Content-Type phù hợp.",
      "Phương thức res.send() sẽ ngay lập tức đóng kết nối máy chủ, còn res.json() sẽ giữ kết nối mở cho đến khi người dùng cuối thực hiện thao tác tải lại trang web trên trình duyệt.",
      "Cả hai phương thức đều giống hệt nhau về mọi mặt và Express cung cấp hai tên gọi khác nhau chỉ nhằm mục đích giúp lập trình viên viết mã nguồn theo sở thích cá nhân của mình."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Middleware xử lý lỗi (Error-handling middleware) trong Express có đặc điểm gì đặc biệt?",
    "opts": [
      "Đây là các hàm chuyên dùng để sửa lỗi cú pháp trong mã nguồn của lập trình viên một cách hoàn toàn tự động ngay trong quá trình máy chủ Node.js đang vận hành thực tế.",
      "Đây là loại middleware duy nhất không cho phép sử dụng từ khóa return và bắt buộc phải được đặt ở vị trí đầu tiên trong danh sách các middleware của ứng dụng web.",
      "Đây là loại hàm middleware có đúng 4 tham số đầu vào (err, req, res, next), trong đó tham số đầu tiên đại diện cho đối tượng lỗi xảy ra trong quá trình ứng dụng thực thi.",
      "Đây là middleware tự động được hệ điều hành kích hoạt mỗi khi máy tính bị mất kết nối mạng internet để thông báo cho người dùng biết về trạng thái ngoại tuyến của thiết bị."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Để phục vụ các tệp tin tĩnh (hình ảnh, CSS, JS) trong Express, bạn sử dụng phương thức nào?",
    "opts": [
      "Sử dụng middleware tích hợp sẵn express.static() và truyền vào đường dẫn của thư mục chứa các tệp tin tĩnh mà bạn muốn cho phép người dùng truy cập trực tiếp từ web.",
      "Sử dụng công cụ express-generator để nén toàn bộ các tệp tin tĩnh thành một định dạng bảo mật mà chỉ có các trình duyệt web phiên bản mới nhất hiện nay mới có thể đọc được.",
      "Sử dụng phương thức app.serveFiles() và liệt kê danh sách tất cả các tệp tin cần chia sẻ vào một mảng dữ liệu để hệ thống tự động nạp chúng vào bộ nhớ đệm của máy chủ.",
      "Lập trình viên phải viết các hàm xử lý sự kiện đọc tệp thủ công cho từng hình ảnh và tệp tin CSS thông qua thư viện lõi fs trước khi gửi dữ liệu về cho trình duyệt."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Phương thức \"res.render()\" thường được sử dụng trong ngữ cảnh nào?",
    "opts": [
      "Dùng để gửi dữ liệu dạng văn bản thuần túy tới máy khách mà không cần thông qua bất kỳ bước xử lý hay định dạng nào từ phía các công cụ quản lý giao diện của máy chủ.",
      "Dùng để kết hợp dữ liệu với một mẫu giao diện (template) thông qua một Template Engine (như EJS hoặc Pug) để tạo ra nội dung HTML và gửi về cho trình duyệt của người dùng.",
      "Dùng để thực hiện việc vẽ các biểu đồ toán học phức tạp trực tiếp trên máy chủ rồi chuyển đổi chúng thành định dạng hình ảnh để hiển thị lên trang web của ứng dụng.",
      "Dùng để thông báo cho hệ điều hành rằng ứng dụng cần được ưu tiên cấp phát thêm tài nguyên đồ họa nhằm mục đích xử lý các tác vụ liên quan đến video chất lượng cao."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Tại sao thứ tự khai báo các Route và Middleware trong Express lại quan trọng?",
    "opts": [
      "Vì Express sẽ thực thi các Middleware và Route theo đúng thứ tự mà chúng được khai báo trong mã nguồn từ trên xuống dưới cho đến khi một phản hồi được gửi về máy khách.",
      "Vì hệ thống sẽ tự động ưu tiên thực thi các lệnh có độ dài dòng mã ngắn hơn trước để đảm bảo tốc độ phản hồi của trang web luôn đạt mức nhanh nhất có thể cho người dùng.",
      "Vì nếu khai báo sai thứ tự thì hệ điều hành sẽ từ chối thực thi tệp tin JavaScript đó và yêu cầu lập trình viên phải thực hiện việc sắp xếp lại danh sách các hàm xử lý lỗi.",
      "Thực tế thứ tự khai báo không quan trọng vì Express có cơ chế trí tuệ nhân tạo để tự động nhận diện và sắp xếp lại các hàm xử lý theo mức độ quan trọng của từng yêu cầu HTTP."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Đối tượng \"express.Router()\" có lợi ích gì cho các dự án lớn?",
    "opts": [
      "Tự động mã hóa toàn bộ các đường dẫn URL của ứng dụng thành các chuỗi ký tự bảo mật không thể đọc được nhằm mục đích ngăn chặn việc bị tấn công theo phương thức dò tìm lỗi.",
      "Giúp tăng tốc độ kết nối mạng cho ứng dụng bằng cách tạo ra các đường dẫn tắt giữa máy chủ Node.js và các thiết bị phần cứng mạng của nhà cung cấp dịch vụ internet.",
      "Cho phép chia nhỏ các route thành các mô-đun riêng biệt, giúp quản lý mã nguồn dễ dàng hơn, tăng khả năng tái sử dụng và giữ cho tệp tin chính của ứng dụng gọn gàng.",
      "Giúp thay thế hoàn toàn cho trình quản lý gói npm bằng cách cho phép lập trình viên có thể nạp các thư viện bên ngoài trực tiếp từ bên trong các hàm xử lý đường dẫn của dự án."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Cách thiết lập mã trạng thái (Status Code) cho phản hồi trong Express là gì?",
    "opts": [
      "Sử dụng phương thức res.status(code) trước khi gọi các phương thức gửi dữ liệu như send() hoặc json() để xác định trạng thái của phản hồi (ví dụ: 200, 404, 500).",
      "Lập trình viên phải thực hiện việc gán trực tiếp giá trị vào thuộc tính res.code và sau đó đợi hệ thống tự động gửi thông báo trạng thái về cho trình duyệt web người dùng.",
      "Sử dụng phương thức app.setStatusCode(code) để thiết lập một mã trạng thái duy nhất cho toàn bộ các phản hồi của ứng dụng web kể từ khi máy chủ được khởi động thành công.",
      "Mã trạng thái sẽ được Express tự động tính toán dựa trên nội dung của dữ liệu gửi về và lập trình viên không được phép can thiệp vào quá trình này để đảm bảo tính khách quan."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Template Engine (như EJS) đóng vai trò gì khi làm việc với Express?",
    "opts": [
      "Cho phép viết mã HTML có thể chứa các cú pháp JavaScript, giúp nhúng dữ liệu động từ máy chủ vào giao diện trước khi gửi kết quả cuối cùng dưới dạng HTML tới người dùng.",
      "Là một trình soạn thảo mã nguồn chuyên dụng giúp lập trình viên viết các đoạn mã HTML nhanh hơn nhờ vào các tính năng gợi ý từ thông minh được tích hợp sẵn bên trong nó.",
      "Dùng để nén dung lượng của các tệp tin hình ảnh có trong trang web nhằm mục đích giúp cho ứng dụng có thể tải nhanh hơn trên các thiết bị di động có đường truyền mạng yếu.",
      "Là một thư viện bảo mật giúp ngăn chặn việc người dùng có thể xem được mã nguồn HTML của trang web bằng cách thực hiện việc mã hóa toàn bộ các thẻ lệnh hiển thị dữ liệu."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Phương thức \"res.redirect()\" thực hiện chức năng gì?",
    "opts": [
      "Tự động chuyển hướng yêu cầu hiện tại của người dùng sang một địa chỉ URL khác và gửi mã trạng thái chuyển hướng phù hợp (mặc định là 302) về cho trình duyệt web.",
      "Thực hiện việc xóa toàn bộ dữ liệu hiện có trong bộ nhớ tạm của máy chủ và yêu cầu người dùng phải thực hiện việc đăng nhập lại vào hệ thống từ đầu để đảm bảo an toàn.",
      "Chuyển hướng các luồng dữ liệu từ cơ sở dữ liệu chính sang các máy chủ dự phòng mỗi khi hệ thống nhận thấy có dấu hiệu của việc quá tải hoặc bị tấn công từ bên ngoài.",
      "Yêu cầu trình duyệt web của người dùng phải thực hiện việc thay đổi màu sắc giao diện của ứng dụng dựa trên các thiết lập được gửi về từ máy chủ Node.js của dự án."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Middleware tích hợp sẵn \"express.json()\" được dùng để làm gì?",
    "opts": [
      "Dùng để nén tất cả các tệp tin mã nguồn của dự án sang định dạng JSON nhằm mục đích tăng tốc độ thực thi cho các hàm xử lý logic bên trong môi trường Node.js.",
      "Phân tích (parse) thân của các yêu cầu HTTP (request body) có định dạng JSON và gán dữ liệu đó vào thuộc tính req.body để lập trình viên có thể dễ dàng truy cập và sử dụng.",
      "Tự động kiểm tra lỗi cú pháp cho tất cả các tệp tin cấu hình định dạng JSON trong dự án và đưa ra các cảnh báo nếu phát hiện có bất kỳ một sự sai sót nào về mặt dữ liệu.",
      "Dùng để tạo ra các đối tượng JSON ngẫu nhiên phục vụ cho việc kiểm thử hiệu suất xử lý dữ liệu của máy chủ web trong các tình huống có lượng truy cập đồng thời lớn."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Một hàm Middleware cấp ứng dụng (Application-level middleware) được gắn vào đối tượng nào?",
    "opts": [
      "Được gắn vào đối tượng phản hồi (res) để đảm bảo rằng nó chỉ được thực hiện ngay trước khi dữ liệu cuối cùng được máy chủ gửi tới trình duyệt của người dùng để hiển thị.",
      "Được gắn vào các biến toàn cục của hệ thống Node.js nhằm mục đích cho phép tất cả các ứng dụng khác đang chạy trên cùng máy chủ có thể sử dụng chung logic xử lý.",
      "Được gắn vào đối tượng router thông qua phương thức router.use() nhằm mục đích giới hạn phạm vi hoạt động của middleware chỉ trong một nhóm các đường dẫn cụ thể nào đó.",
      "Được gắn trực tiếp vào đối tượng ứng dụng (app) thông qua phương thức app.use() hoặc app.METHOD(), và nó sẽ có hiệu lực đối với toàn bộ luồng xử lý của ứng dụng đó."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 3
  },
  {
    "q": "Tại sao cần gọi hàm \"next()\" bên trong một Middleware?",
    "opts": [
      "Để yêu cầu trình duyệt web của người dùng thực hiện việc tải lại trang web (refresh) nhằm mục đích cập nhật các thông tin mới nhất vừa được xử lý bên trong Middleware.",
      "Để thông báo cho Express rằng Middleware hiện tại đã hoàn thành nhiệm vụ của nó và yêu cầu hệ thống chuyển quyền điều khiển sang hàm Middleware hoặc Route tiếp theo.",
      "Để yêu cầu máy chủ thực hiện việc bỏ qua tất cả các đoạn mã lệnh tiếp theo và ngay lập tức gửi phản hồi về cho người dùng để kết thúc phiên làm việc của yêu cầu hiện tại.",
      "Để khởi động lại vòng lặp sự kiện của Node.js nhằm mục đích xóa sạch các biến tạm thời đã được tạo ra trong quá trình Middleware thực hiện các tác vụ xử lý dữ liệu."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Sự khác biệt giữa \"req.query\" và \"req.params\" là gì?",
    "opts": [
      "req.query lấy các giá trị từ chuỗi truy vấn sau dấu ? trên URL, trong khi req.params lấy giá trị từ các đoạn đường dẫn động được định nghĩa sẵn trong cấu trúc của route.",
      "Thực tế hai thuộc tính này hoàn toàn giống hệt nhau về chức năng và lập trình viên có thể sử dụng chúng thay thế cho nhau tùy theo thói quen viết mã nguồn của mình.",
      "req.query chuyên dùng để lấy mật khẩu của người dùng gửi lên từ form, còn req.params dùng để lấy tên đăng nhập từ các tệp tin cookie được lưu trữ trên trình duyệt web.",
      "req.query là một hàm xử lý bất đồng bộ yêu cầu phải có từ khóa await, còn req.params là một thuộc tính đồng bộ có thể truy cập trực tiếp mà không cần chờ đợi hệ thống xử lý."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Phương thức \"res.sendStatus()\" có đặc điểm gì khác với \"res.status()\"?",
    "opts": [
      "res.sendStatus() sẽ thiết lập mã trạng thái và đồng thời gửi luôn chuỗi mô tả của mã đó làm phản hồi cho máy khách, trong khi res.status() chỉ thiết lập mã mà chưa gửi đi.",
      "res.sendStatus() được dùng để gửi các thông điệp bảo mật bằng tiếng Việt, còn res.status() chỉ hỗ trợ gửi các thông báo lỗi bằng tiếng Anh theo quy định của giao thức HTTP.",
      "res.sendStatus() sẽ tự động đóng toàn bộ các tiến trình đang chạy của Node.js sau khi gửi mã trạng thái, còn res.status() cho phép ứng dụng tiếp tục hoạt động bình thường.",
      "Hai phương thức này chỉ có thể được sử dụng trong môi trường phát triển (development) và sẽ bị hệ thống vô hiệu hóa hoàn toàn khi ứng dụng được triển khai lên máy chủ thật."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Lợi ích của việc sử dụng Middleware của bên thứ ba (Third-party middleware) như \"morgan\" là gì?",
    "opts": [
      "Cung cấp các tính năng đã được xây dựng sẵn và tối ưu hóa (nh ghi nhật ký yêu cầu HTTP), giúp lập trình viên tiết kiệm thời gian phát triển và tập trung vào logic chính của ứng dụng.",
      "Giúp chuyển đổi toàn bộ ứng dụng Express sang định dạng ứng dụng di động có thể cài đặt trực tiếp trên các hệ điều hành như Android hay iOS mà không cần viết lại mã nguồn.",
      "Giúp thay thế hoàn toàn các đoạn mã xử lý logic của lập trình viên bằng các thuật toán trí tuệ nhân tạo để ứng dụng có thể tự vận hành mà không cần sự can thiệp của con người.",
      "Tự động xóa bỏ các thành viên không có quyền truy cập ra khỏi dự án và thực hiện việc mã hóa toàn bộ ổ đĩa cứng của máy chủ để bảo vệ bí mật kinh doanh cho doanh nghiệp."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Chức năng cốt lõi của hàm \"next()\" bên trong một middleware của Express là gì?",
    "opts": [
      "Hàm next() sẽ tự động kết thúc vòng đời của một yêu cầu HTTP và gửi phản hồi mặc định về cho trình duyệt nếu lập trình viên không gọi phương thức res.end() một cách thủ công trong mã nguồn.",
      "Hàm next() chỉ có tác dụng bên trong các hàm xử lý lỗi cấp cao và nó hoàn toàn không thể được sử dụng trong các middleware thông thường cấp ứng dụng hoặc cấp bộ định tuyến của một dự án Express.",
      "Hàm next() được gọi bên trong một middleware để thông báo cho Express chuyển quyền kiểm soát sang hàm middleware hoặc hàm xử lý route tiếp theo trong danh sách các hàm được đăng ký cho yêu cầu đó.",
      "Hàm next() là một phương thức đặc biệt dùng để xóa sạch bộ nhớ đệm của ứng dụng và thực hiện việc khởi động lại máy chủ Node.js ngay lập tức khi hệ thống phát hiện có lỗi xảy ra trong quá trình chạy."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Thuộc tính \"req.body\" trong Express có đặc điểm hoạt động như thế nào?",
    "opts": [
      "Thuộc tính req.body được Express tự động tích hợp sẵn để chứa dữ liệu của mọi loại yêu cầu HTTP mà không cần lập trình viên phải cài đặt thêm bất kỳ middleware phân tích dữ liệu nào từ bên ngoài.",
      "Thuộc tính req.body thường mặc định là undefined và chỉ có giá trị khi lập trình viên sử dụng các middleware phân tích dữ liệu (body-parsing middleware) như express.json() hoặc express.urlencoded().",
      "Thuộc tính req.body là một chuỗi văn bản thuần túy chứa toàn bộ nội dung thô của gói tin HTTP và lập trình viên bắt buộc phải tự mình viết mã lệnh để phân tích chuỗi này nhằm lấy ra các giá trị cần thiết.",
      "Thuộc tính req.body chỉ chứa các tham số đơn giản được truyền qua địa chỉ URL của trình duyệt web và nó hoàn toàn không hỗ trợ việc lấy dữ liệu phức tạp được gửi từ các biểu mẫu HTML (form)."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Quy tắc khai báo và vị trí của Middleware xử lý lỗi (Error-handling middleware) là gì?",
    "opts": [
      "Middleware xử lý lỗi phải được khai báo ở ngay đầu tệp tin ứng dụng để nó có thể theo dõi và bắt lỗi của tất cả các đoạn mã lệnh phía dưới một cách hiệu quả nhất ngay khi máy chủ bắt đầu vận hành.",
      "Middleware xử lý lỗi trong Express chỉ có thể bắt được các lỗi đồng bộ và hoàn toàn không có khả năng xử lý các lỗi phát sinh từ các tác vụ bất đồng bộ sử dụng đối tượng Promise hoặc cú pháp async/await.",
      "Middleware xử lý lỗi phải được khai báo với đúng 4 tham số đầu vào (err, req, res, next) và bắt buộc phải được đặt ở vị trí sau cùng, sau tất cả các khai báo route và middleware khác của ứng dụng.",
      "Middleware xử lý lỗi là một công cụ thông minh giúp ứng dụng tự động sửa các lỗi cú pháp trong mã nguồn JavaScript mà không cần sự can thiệp của lập trình viên trong suốt quá trình phát triển dự án."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Lợi ích chính của việc sử dụng đối tượng \"express.Router()\" trong các ứng dụng lớn là gì?",
    "opts": [
      "express.Router() cho phép tạo ra các trình xử lý route có thể tách rời và lắp ghép được, giúp tổ chức mã nguồn của các ứng dụng phức tạp thành các mô-đun riêng biệt, sạch sẽ và dễ bảo trì hơn.",
      "express.Router() đóng vai trò là một trình duyệt web mini được tích hợp vào Node.js giúp lập trình viên có thể kiểm tra giao diện người dùng ngay trong cửa sổ dòng lệnh Terminal một cách trực quan nhất.",
      "express.Router() bắt buộc lập trình viên phải sử dụng một ngôn ngữ lập trình khác không phải JavaScript để định nghĩa các đường dẫn URL của ứng dụng nhằm mục đích tăng cường tính bảo mật cho hệ thống.",
      "express.Router() là một dịch vụ lưu trữ đám mây của Express giúp tự động đồng bộ hóa toàn bộ mã nguồn của dự án lên các máy chủ dự phòng nhằm đảm bảo an toàn tuyệt đối cho dữ liệu của doanh nghiệp."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Middleware tích hợp sẵn \"express.static()\" thực hiện nhiệm vụ gì?",
    "opts": [
      "express.static() dùng để nén tất cả các tệp tin hình ảnh và video thành một định dạng duy nhất nhằm mục đích giảm thiểu tối đa băng thông internet cho máy chủ khi thực hiện việc phục vụ người dùng cuối.",
      "express.static() là middleware tích hợp sẵn giúp phục vụ các tệp tin tĩnh như HTML, CSS, JavaScript và hình ảnh từ một thư mục cụ thể, cho phép người dùng truy cập trực tiếp các tệp này thông qua URL.",
      "express.static() là một thuật toán mã hóa đặc biệt giúp bảo vệ các tệp tin trong máy chủ không bị người dùng xem được nội dung khi họ truy cập thông qua các trình duyệt web thông thường hiện nay.",
      "express.static() yêu cầu lập trình viên phải viết các hàm xử lý sự kiện đọc tệp thủ công cho từng tệp tin đơn lẻ có trên hệ thống trước khi gửi dữ liệu về cho trình duyệt của phía máy khách để hiển thị."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Sự khác biệt về nội dung dữ liệu giữa \"req.query\" và \"req.params\" là gì?",
    "opts": [
      "req.query chứa các tham số chuỗi truy vấn (query strings) được gửi kèm theo địa chỉ URL sau dấu hỏi chấm (?), trong khi req.params chứa các tham số được định nghĩa động trong đường dẫn của route.",
      "req.query chứa thông tin về tất cả các tệp tin cookie đang được lưu trữ trên trình duyệt của người dùng và nó bắt buộc yêu cầu một khóa bảo mật từ phía máy chủ thì mới có thể giải mã được dữ liệu.",
      "req.query dùng để lấy giá trị của các tham số động được định nghĩa bên trong đường dẫn URL của route bằng cách sử dụng dấu hai chấm ở phía trước tên của tham số đó trong mã nguồn JavaScript.",
      "req.query là một hàm xử lý đặc biệt của Express dùng để truy vấn trực tiếp vào cơ sở dữ liệu và trả về kết quả cho người dùng dưới dạng một mảng các đối tượng JSON sau khi đã qua xử lý logic."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Phương thức \"res.sendFile()\" trong Express có đặc điểm gì quan trọng?",
    "opts": [
      "res.sendFile() dùng để gửi nội dung của một tệp tin cụ thể từ máy chủ về trình duyệt của khách hàng, và phương thức này bắt buộc yêu cầu lập trình viên phải cung cấp một đường dẫn tuyệt đối đến tệp tin đó.",
      "res.sendFile() là phương thức chuyên dùng để gửi các email thông báo tự động cho người dùng mỗi khi họ thực hiện thao tác đăng ký tài khoản thành công trên trang web của ứng dụng Node.js.",
      "res.sendFile() thực hiện việc xóa tệp tin khỏi ổ đĩa cứng của máy chủ ngay sau khi nội dung của tệp tin đó đã được truyền tải hoàn tất tới trình duyệt của người dùng cuối để đảm bảo an toàn thông tin.",
      "res.sendFile() chỉ hỗ trợ việc gửi các tệp tin văn bản đơn giản có đuôi .txt và hệ thống sẽ tự động báo lỗi nếu lập trình viên cố tình gửi các tệp tin có định dạng khác như .pdf hoặc các tệp tin nén .zip."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Sự khác biệt về mục đích sử dụng giữa \"res.set()\" và \"res.status()\" là gì?",
    "opts": [
      "res.set() dùng để thiết lập các tiêu đề HTTP (headers) cho phản hồi, trong khi res.status() dùng để gán mã trạng thái phản hồi như 200, 404 hoặc 500 cho gói tin dữ liệu chuẩn bị gửi về cho máy khách.",
      "Hai phương thức này thực tế hoàn toàn giống hệt nhau về mọi mặt và chúng được Express cung cấp chỉ để giúp cho mã nguồn của lập trình viên trở nên phong phú và đa dạng hơn về mặt cú pháp lệnh.",
      "res.set() dùng để thiết lập lại mật khẩu cho người dùng hiện tại, còn res.status() dùng để hiển thị trạng thái kết nối mạng internet của máy chủ Node.js lên bảng điều khiển của nhà phát triển.",
      "res.set() bắt buộc phải được gọi sau phương thức res.send(), còn res.status() chỉ có thể được gọi bên trong các hàm xử lý lỗi middleware cấp ứng dụng của dự án Express đã được triển khai thực tế."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Phương thức \"app.all()\" được sử dụng trong trường hợp nào?",
    "opts": [
      "app.all() được sử dụng để định nghĩa một route có khả năng lắng nghe và phản hồi tất cả các phương thức HTTP (bao gồm GET, POST, PUT, DELETE và các phương thức khác) tại một đường dẫn cụ thể.",
      "app.all() thực hiện việc gửi một thông điệp thông báo tới tất cả các người dùng đang truy cập trang web về việc máy chủ chuẩn bị thực hiện quy trình bảo trì hệ thống định kỳ trong thời gian tới.",
      "app.all() là một lệnh đặc biệt dùng để khởi động lại toàn bộ ứng dụng Express và xóa sạch các biến toàn cục hiện có trong bộ nhớ RAM của máy chủ để giải phóng tài nguyên cho hệ điều hành.",
      "app.all() yêu cầu trình duyệt web của người dùng phải thực hiện việc tải lại tất cả các tệp tin tĩnh của trang web mỗi khi có một thay đổi nhỏ nhất xảy ra trong mã nguồn của ứng dụng phía máy chủ."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Tại sao thứ tự khai báo route trong Express lại cực kỳ quan trọng đối với logic ứng dụng?",
    "opts": [
      "Thứ tự khai báo route chỉ thực sự quan trọng khi ứng dụng chạy ở chế độ phát triển, còn khi triển khai lên máy chủ thật thì Express sẽ tự động tối ưu hóa và sắp xếp lại toàn bộ danh sách các hàm.",
      "Vì Express sẽ tự động sắp xếp lại các route dựa trên độ dài của đường dẫn URL, hệ thống luôn ưu tiên thực hiện các route có độ dài ngắn nhất trước để đảm bảo hiệu suất xử lý tối ưu nhất.",
      "Vì Express sẽ kiểm tra và thực thi route đầu tiên khớp với yêu cầu của người dùng; nếu một route tổng quát được đặt trước một route cụ thể, route cụ thể đó có khả năng sẽ không bao giờ được thực thi.",
      "Lập trình viên có thể khai báo route theo bất kỳ thứ tự nào vì Express sử dụng cơ chế xử lý song song để tìm ra route phù hợp nhất với yêu cầu của người dùng tại bất kỳ thời điểm nào."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Cho đoạn mã sau, trình duyệt sẽ hiển thị kết quả gì khi truy cập vào trang chủ?\napp.use((req, res, next) => {\n console.log('M1');\n next();\n});\napp.get('/', (req, res) => {\n res.send('Hello');\n});",
    "opts": [
      "Trình duyệt sẽ hiển thị chữ 'Hello' và bảng điều khiển của máy chủ sẽ in ra dòng chữ 'M1' vì middleware được khai báo trước bằng phương thức app.use sẽ được thực thi trước khi yêu cầu đi đến hàm xử lý route chính.",
      "Trình duyệt sẽ hiển thị một thông báo lỗi 404 vì việc sử dụng middleware chung trước khi định nghĩa route trang chủ sẽ làm hỏng cấu trúc định tuyến mặc định của framework Express và khiến hệ thống không tìm thấy tài nguyên.",
      "Trình duyệt sẽ hiển thị chữ 'Hello' nhưng bảng điều khiển sẽ không in ra gì cả vì phương thức app.use chỉ có tác dụng đối với các yêu cầu không khớp với bất kỳ đường dẫn cụ thể nào đã được định nghĩa trong ứng dụng Express.",
      "Trình duyệt sẽ rơi vào trạng thái chờ đợi vĩnh viễn (Loading) vì middleware đã chiếm quyền điều khiển và Express không thể chuyển tiếp yêu cầu đến hàm app.get mặc dù lập trình viên đã thực hiện việc gọi hàm tiếp theo next."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Điều gì xảy ra khi thực thi đoạn mã thiếu hàm \"next()\" sau đây?\napp.use((req, res, next) => {\n console.log('Log');\n});\napp.get('/', (req, res) => {\n res.send('Home');\n});",
    "opts": [
      "Trình duyệt hiển thị chữ 'Home' bình thường vì Express có cơ chế tự động nhận diện khi một middleware kết thúc công việc và sẽ tự động chuyển quyền điều khiển sang hàm xử lý kế tiếp mà không cần lệnh nhắc.",
      "Trình duyệt sẽ bị treo (Loading) và không bao giờ nhận được phản hồi vì middleware đầu tiên không gọi hàm next(), khiến luồng xử lý bị chặn đứng tại đó và không bao giờ chạm tới được hàm app.get phía dưới.",
      "Máy chủ sẽ ngay lập tức thông báo lỗi \"Error: next is not defined\" và tự động khởi động lại tiến trình để đảm bảo rằng ứng dụng không bị rò rỉ bộ nhớ do một yêu cầu HTTP không được giải phóng hoàn toàn.",
      "Trình duyệt sẽ nhận được phản hồi từ hệ điều hành thông báo rằng máy chủ đã đóng kết nối đột ngột vì Node.js sẽ tự động hủy các yêu cầu tiêu tốn quá 5 giây mà không thực hiện bất kỳ thao tác gửi dữ liệu nào."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Kết quả in ra console là gì khi truy cập vào địa chỉ /test?\napp.get('/test', (req, res, next) => {\n console.log('A');\n next();\n}, (req, res) => {\n console.log('B');\n res.send('Done');\n});",
    "opts": [
      "Bảng điều khiển in ra chữ 'B' trước rồi mới đến chữ 'A' vì Express ưu tiên thực hiện các hàm gửi phản hồi dữ liệu về cho người dùng trước khi thực hiện các tác vụ phụ trợ như ghi nhật ký hoặc kiểm tra điều kiện.",
      "Hệ thống sẽ báo lỗi cú pháp vì phương thức app.get chỉ chấp nhận tối đa hai tham số là đường dẫn URL và một hàm callback duy nhất, việc truyền vào tham số thứ ba sẽ làm hỏng cấu trúc của framework.",
      "Bảng điều khiển sẽ in ra chữ 'A' và sau đó là chữ 'B' vì Express cho phép khai báo nhiều hàm xử lý cho cùng một route và chúng sẽ được thực thi tuần tự nếu hàm phía trước gọi lệnh chuyển tiếp next.",
      "Bảng điều khiển chỉ in ra chữ 'A' và trình duyệt sẽ hiển thị chữ 'Done' vì Express chỉ cho phép mỗi route có duy nhất một hàm xử lý chính và các hàm bổ trợ phía sau sẽ bị hệ thống tự động loại bỏ khi thực thi."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Cho đoạn mã xử lý tham số sau, trình duyệt hiển thị gì khi truy cập /user/123?\napp.get('/user/:id', (req, res) => {\n const userId = req.params.userId;\n res.send(`ID: ${userId}`);\n});",
    "opts": [
      "Trình duyệt sẽ hiển thị chuỗi văn bản \"ID: undefined\" vì tên thuộc tính trong đối tượng req.params phải khớp hoàn toàn với tên biến đã định nghĩa trong route (ở đây phải là req.params.id thay vì userId).",
      "Trình duyệt sẽ hiển thị một thông báo lỗi 500 vì hệ thống không tìm thấy biến userId trong phạm vi của hàm xử lý và JavaScript sẽ ném ra ngoại lệ ReferenceError làm dừng tiến trình đang chạy của máy chủ.",
      "Trình duyệt sẽ hiển thị chuỗi văn bản \"ID: 123\" vì Express tự động ánh xạ giá trị từ đường dẫn vào thuộc tính params và lập trình viên có thể truy cập bằng bất kỳ tên biến nào mà họ mong muốn sử dụng.",
      "Trình duyệt sẽ hiển thị chuỗi văn bản \"ID: :id\" vì Express sẽ coi toàn bộ đoạn văn bản nằm sau dấu gạch chéo cuối cùng là một chuỗi ký tự thuần túy và không thực hiện việc phân tách giá trị thực tế của tham số."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Thứ tự các route sau đây sẽ dẫn đến kết quả gì khi truy cập /user/me?\napp.get('/user/:id', (req, res) => {\n res.send('User Page');\n});\napp.get('/user/me', (req, res) => {\n res.send('My Profile');\n});",
    "opts": [
      "Trình duyệt hiển thị 'My Profile' vì Express sẽ thực hiện việc so sánh toàn bộ danh sách các route và ưu tiên chọn đường dẫn nào có độ khớp chính xác cao nhất với địa chỉ mà người dùng đã nhập.",
      "Trình duyệt sẽ hiển thị một danh sách lựa chọn bao gồm cả 'User Page' và 'My Profile' để người dùng có thể tự quyết định xem họ muốn truy cập vào trang nào trong hai trang web đã được định nghĩa.",
      "Trình duyệt hiển thị 'User Page' vì Express kiểm tra các route từ trên xuống dưới và địa chỉ '/user/me' đã khớp với định dạng của route động '/user/:id' (với giá trị id lúc này được coi là chuỗi \"me\").",
      "Máy chủ sẽ báo lỗi \"Duplicate Route\" và ngừng hoạt động vì lập trình viên không được phép khai báo hai đường dẫn có cấu trúc tương tự nhau bên trong cùng một ứng dụng web sử dụng framework Express."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Điều gì sẽ in ra console khi một lỗi xảy ra trong đoạn mã này?\napp.get('/', (req, res, next) => {\n next(new Error('Fail'));\n});\napp.use((err, req, res, next) => {\n console.log('Error Handled');\n res.send('Error');\n});",
    "opts": [
      "Bảng điều khiển sẽ in ra dòng chữ 'Error Handled' vì khi truyền một đối tượng vào hàm next(), Express sẽ bỏ qua các middleware thông thường và tìm đến middleware xử lý lỗi có 4 tham số đầu vào.",
      "Bảng điều khiển sẽ không in ra gì và trình duyệt báo lỗi \"Fail\" vì các hàm middleware thông thường không thể bắt được lỗi nếu lập trình viên không sử dụng cấu trúc try...catch bao quanh mã lệnh.",
      "Máy chủ sẽ bị dừng hoạt động ngay lập tức vì việc gọi hàm next kèm theo một đối tượng lỗi sẽ được coi là một hành vi vi phạm bảo mật nếu ứng dụng không chạy trong môi trường phát triển cục bộ.",
      "Bảng điều khiển sẽ in ra nội dung của lỗi 'Fail' vì Express có cơ chế tự động ghi nhật ký mọi lỗi phát sinh vào tệp tin hệ thống trước khi chuyển quyền điều khiển cho các hàm xử lý lỗi của người dùng."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Cho đoạn mã sau, kết quả của 'val' là gì khi truy cập /shop?item=book?\napp.get('/shop', (req, res) => {\n const val = req.query.item || 'none';\n res.send(val);\n});",
    "opts": [
      "Trình duyệt hiển thị chữ 'book' vì Express tự động phân tích chuỗi truy vấn (query string) nằm sau dấu chấm hỏi và lưu trữ các cặp khóa-giá trị vào đối tượng req.query cho lập trình viên sử dụng.",
      "Trình duyệt hiển thị chữ 'none' vì các tham số truyền qua URL bằng dấu chấm hỏi chỉ có thể được truy cập thông qua đối tượng req.params sau khi lập trình viên đã định nghĩa các quy tắc định tuyến phức tạp.",
      "Máy chủ sẽ báo lỗi vì dấu bằng (=) trong địa chỉ URL là một ký tự cấm và Express sẽ tự động chặn mọi yêu cầu chứa ký tự này để ngăn ngừa các cuộc tấn công tiêm nhiễm mã độc vào hệ thống.",
      "Trình duyệt sẽ hiển thị một mảng dữ liệu ['item', 'book'] vì thuộc tính query của Express sẽ luôn trả về toàn bộ các thành phần của chuỗi truy vấn dưới dạng danh sách các từ đơn lẻ để bảo mật."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Trình duyệt sẽ hiển thị kết quả gì khi truy cập vào địa chỉ /products/search?price=100?\napp.get('/products/:action', (req, res) => {\n const action = req.params.action;\n const price = req.query.price;\n res.send(`${action} at ${price}`);\n});",
    "opts": [
      "Trình duyệt sẽ hiển thị chuỗi văn bản \"products at 100\" vì hệ thống sẽ mặc định coi phần văn bản đầu tiên sau dấu gạch chéo là giá trị của tham số động bất kể tên gọi của nó là gì.",
      "Máy chủ sẽ báo lỗi 500 vì dấu chấm hỏi trên địa chỉ URL được coi là một ký tự không hợp lệ và sẽ làm hỏng quá trình phân tích các tham số động của đối tượng req.params trong framework.",
      "Trình duyệt sẽ hiển thị chuỗi văn bản \"search at 100\" vì Express thực hiện việc trích xuất đồng thời tham số động \"action\" từ đường dẫn và giá trị \"price\" từ chuỗi truy vấn sau dấu chấm hỏi.",
      "Trình duyệt sẽ hiển thị chuỗi văn bản \"search at undefined\" vì trong Express, lập trình viên không được phép sử dụng đồng thời cả req.params và req.query bên trong cùng một hàm xử lý route."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Cho đoạn mã sau, kết quả in ra bảng điều khiển là gì khi truy cập trang chủ?\napp.get('/', (req, res, next) => {\n res.send('A');\n console.log('B');\n next();\n});\napp.use((req, res) => {\n console.log('C');\n});",
    "opts": [
      "Bảng điều khiển sẽ in ra chữ 'B' rồi đến chữ 'C' và trình duyệt nhận được chữ 'A' vì lệnh gửi phản hồi không làm dừng việc thực thi các dòng mã phía sau cũng như lệnh chuyển tiếp next.",
      "Bảng điều khiển chỉ in ra chữ 'B' vì sau khi phương thức res.send được thực hiện, Express sẽ tự động ngắt kết nối và bỏ qua tất cả các lệnh bao gồm cả hàm next và các middleware phía sau.",
      "Bảng điều khiển sẽ in ra chữ 'C' trước rồi mới đến chữ 'B' vì các middleware đăng ký bằng app.use luôn có độ ưu tiên thực thi cao hơn so với các hàm xử lý route cụ thể được đăng ký bằng app.get.",
      "Hệ thống sẽ ném ra lỗi \"ERR_HTTP_HEADERS_SENT\" ngay tại vị trí hàm next() vì lập trình viên không được phép gọi lệnh chuyển tiếp sang middleware khác sau khi đã gửi phản hồi về cho khách hàng."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Dự đoán kết quả hiển thị trên trình duyệt khi thực thi đoạn mã chuyển hướng sau:\napp.get('/old', (req, res) => {\n res.redirect('/new');\n});\napp.get('/new', (req, res) => {\n res.send('Welcome to New');\n});",
    "opts": [
      "Trình duyệt sẽ rơi vào một vòng lặp vô tận và báo lỗi \"Too many redirects\" vì việc sử dụng res.redirect mà không có các điều kiện kiểm tra logic sẽ khiến máy chủ liên tục gửi các yêu cầu chuyển hướng.",
      "Trình duyệt hiển thị chuỗi 'Welcome to New' và thanh địa chỉ sẽ thay đổi sang '/new' vì phương thức res.redirect gửi mã trạng thái chuyển hướng yêu cầu trình duyệt thực hiện một yêu cầu mới tới URL chỉ định.",
      "Trình duyệt sẽ hiển thị nội dung của trang '/old' nhưng với văn bản của trang '/new' vì hệ thống thực hiện việc chuyển hướng ngầm bên trong máy chủ mà không thông báo cho trình duyệt web biết.",
      "Trình duyệt sẽ hiển thị một thông báo lỗi 404 vì phương thức res.redirect chỉ có tác dụng khi chuyển hướng đến các trang web bên ngoài và không hỗ trợ các đường dẫn nội bộ bên trong cùng một ứng dụng."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Điều gì xảy ra khi truy cập vào địa chỉ /api trong đoạn mã sử dụng Router sau?\nconst router = express.Router();\nrouter.get('/', (req, res) => res.send('API Home'));\napp.use('/api', router);",
    "opts": [
      "Trình duyệt hiển thị 'API Home' vì đối tượng router được gắn vào đường dẫn tiền tố '/api', do đó route '/' bên trong router sẽ tương ứng với đường dẫn đầy đủ là '/api/'.",
      "Trình duyệt hiển thị 'API Home' nhưng chỉ khi người dùng truy cập chính xác vào địa chỉ '/api/' (có dấu gạch chéo ở cuối) vì Express phân biệt nghiêm ngặt giữa đường dẫn có và không có dấu gạch chéo.",
      "Trình duyệt sẽ báo lỗi 404 vì route bên trong đối tượng router phải được viết đầy đủ là '/api' thì hệ thống mới có thể nhận diện và thực hiện việc xử lý các yêu cầu HTTP từ phía máy khách.",
      "Máy chủ sẽ bị treo do đối tượng router là một ứng dụng độc lập và nó không thể giao tiếp được với đối tượng app chính nếu lập trình viên không sử dụng thêm các thư viện hỗ trợ từ bên ngoài."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Giá trị của 'type' trả về cho trình duyệt là gì khi truy cập /download?\napp.get('/download', (req, res) => {\n res.set('Content-Type', 'text/html');\n res.status(201).send('Created');\n});",
    "opts": [
      "Trình duyệt nhận diện kiểu nội dung là 'application/json' vì Express mặc định sẽ tự động ghi đè tất cả các tiêu đề do lập trình viên thiết lập để đảm bảo tính đồng nhất cho dữ liệu của toàn bộ ứng dụng.",
      "Trình duyệt sẽ nhận được mã trạng thái 200 vì mã trạng thái 201 chỉ dành riêng cho các yêu cầu POST và hệ thống sẽ tự động điều chỉnh lại giá trị cho phù hợp với phương thức GET đang sử dụng.",
      "Trình duyệt nhận diện kiểu nội dung là 'text/html' và mã trạng thái là 201 vì phương thức res.set được dùng để thiết lập thủ công các tiêu đề phản hồi (HTTP Headers) trước khi dữ liệu được gửi đi.",
      "Trình duyệt sẽ báo lỗi \"Invalid Header\" vì phương thức res.set chỉ được phép sử dụng để thiết lập các tiêu đề tùy chỉnh (custom headers) và không được phép can thiệp vào các tiêu đề tiêu chuẩn như Content-Type."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Cho đoạn mã sau, nội dung nào sẽ được in ra console khi truy cập /step?\napp.get('/step', (req, res, next) => {\n console.log('1');\n if (true) return next();\n console.log('2');\n}, (req, res) => {\n console.log('3');\n res.send('Done');\n});",
    "opts": [
      "Bảng điều khiển sẽ in ra số '1' sau đó đến số '3' vì từ khóa return giúp thoát khỏi hàm callback đầu tiên ngay sau khi gọi lệnh next(), ngăn chặn việc thực thi lệnh in số '2'.",
      "Bảng điều khiển sẽ in ra lần lượt các số '1', '2', '3' vì lệnh next() chỉ mang tính chất thông báo và không có khả năng làm dừng luồng thực thi của các dòng mã nằm phía dưới nó trong cùng một hàm.",
      "Bảng điều khiển chỉ in ra duy nhất số '1' và trình duyệt hiển thị 'Done' vì lệnh next() khi được đặt trong cấu trúc điều kiện sẽ tự động bỏ qua toàn bộ phần còn lại của tất cả các hàm xử lý.",
      "Hệ thống sẽ báo lỗi thực thi vì lập trình viên không được phép sử dụng từ khóa return kết hợp với hàm next() bên trong các hàm xử lý route của framework Express."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Trình duyệt hiển thị gì khi truy cập /data với đoạn mã sau?\napp.get('/data', (req, res) => {\n res.json({ message: 'Hello' });\n res.send('World');\n});",
    "opts": [
      "Máy chủ sẽ bị treo vĩnh viễn vì việc gọi hai phương thức gửi phản hồi liên tiếp sẽ khiến cho luồng dữ liệu bị xung đột và hệ thống không biết phải đóng kết nối tại thời điểm nào.",
      "Trình duyệt hiển thị đối tượng JSON {\"message\": \"Hello\"} và máy chủ gặp lỗi vì bạn không thể gửi thêm phản hồi bằng res.send sau khi đã gửi phản hồi bằng res.json.",
      "Trình duyệt hiển thị chuỗi văn bản \"HelloWorld\" vì Express sẽ tự động gộp các kết quả từ nhiều phương thức gửi phản hồi khác nhau thành một gói tin duy nhất để tối ưu hóa băng thông.",
      "Trình duyệt sẽ hiển thị chuỗi văn bản \"World\" vì phương thức thực hiện sau cùng luôn có quyền ghi đè lên dữ liệu đã được chuẩn bị bởi phương thức thực hiện trước đó trong luồng xử lý."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Đoạn mã sử dụng middleware sau in ra gì khi truy cập /auth?\nconst check = (req, res, next) => {\n req.user = 'Admin';\n next();\n};\napp.get('/auth', check, (req, res) => {\n res.send(`User: ${req.user}`);\n});",
    "opts": [
      "Trình duyệt hiển thị \"User: undefined\" vì các thay đổi trên đối tượng req bên trong một hàm middleware chỉ có tác dụng cục bộ và không thể chia sẻ dữ liệu với các hàm xử lý khác.",
      "Máy chủ báo lỗi bảo mật vì việc tự ý thêm thuộc tính vào đối tượng req là một hành vi bị cấm trong Express nhằm ngăn chặn việc làm sai lệch thông tin của yêu cầu gốc từ người dùng.",
      "Trình duyệt hiển thị \"User: Admin\" vì các middleware có khả năng chỉnh sửa đối tượng yêu cầu (req) và các thay đổi này sẽ được bảo toàn khi chuyển tiếp sang hàm xử lý tiếp theo.",
      "Trình duyệt hiển thị chuỗi \"User: Admin\" nhưng chỉ khi lập trình viên khai báo biến user là một biến toàn cục (global) trong toàn bộ dự án Node.js của mình."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Điều gì xảy ra khi truy cập vào địa chỉ không tồn tại (ví dụ: /abc) trong đoạn mã này?\napp.get('/', (req, res) => res.send('Home'));\napp.use((req, res) => {\n res.status(404).send('Lost?');\n});",
    "opts": [
      "Trình duyệt hiển thị thông báo lỗi mặc định của Express \"Cannot GET /abc\" vì các middleware đăng ký bằng app.use không có khả năng xử lý các yêu cầu HTTP nếu không có tham số đường dẫn.",
      "Máy chủ sẽ báo lỗi và dừng hoạt động vì lập trình viên đã quên không gọi hàm next() bên trong middleware xử lý lỗi khiến cho yêu cầu của người dùng bị treo vĩnh viễn.",
      "Trình duyệt sẽ hiển thị chữ 'Lost?' với mã trạng thái 404 vì middleware đăng ký bằng app.use nằm ở cuối cùng sẽ đóng vai trò như một hàm bắt các yêu cầu không khớp với bất kỳ route nào phía trên.",
      "Trình duyệt sẽ tự động chuyển hướng về trang chủ '/' vì Express có cơ chế tự động tìm kiếm route gần nhất nếu người dùng nhập sai địa chỉ URL trên thanh địa chỉ."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Cho đoạn mã sau, kết quả của 'msg' là gì khi truy cập /info?secret=123?\napp.use('/info', (req, res, next) => {\n if (req.query.secret === '123') next();\n else res.send('No');\n});\napp.get('/info', (req, res) => {\n res.send('Yes');\n});",
    "opts": [
      "Trình duyệt hiển thị 'No' vì Express sẽ ưu tiên thực hiện các lệnh gửi phản hồi bên trong các middleware chung trước khi xét đến các điều kiện logic phức tạp của các route cụ thể.",
      "Trình duyệt hiển thị cả hai chuỗi 'NoYes' vì hệ thống sẽ thực hiện việc nối kết quả từ tất cả các hàm có chứa lệnh gửi dữ liệu về cho khách hàng để đảm bảo không bị mất thông tin.",
      "Trình duyệt hiển thị 'Yes' vì giá trị secret từ chuỗi truy vấn khớp với điều kiện, lệnh next() được gọi và luồng xử lý được chuyển tiếp đến hàm app.get tương ứng với đường dẫn '/info'.",
      "Máy chủ báo lỗi ReferenceError vì thuộc tính req.query chỉ có sẵn trong các hàm app.get và không thể truy cập được từ bên trong các middleware đăng ký bằng phương thức app.use."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Dự đoán kết quả in ra console khi truy cập /test?\napp.get('/test', (req, res, next) => {\n console.log('1');\n next();\n});\napp.all('/test', (req, res) => {\n console.log('2');\n res.send('End');\n});",
    "opts": [
      "Bảng điều khiển in ra '1' sau đó đến '2' vì app.all sẽ lắng nghe mọi phương thức HTTP tại đường dẫn chỉ định và nó sẽ thực hiện sau khi hàm xử lý phía trước gọi lệnh next.",
      "Bảng điều khiển in ra số '2' rồi mới đến số '1' vì phương thức app.all là một lệnh tổng quát và luôn được hệ thống ưu tiên thực hiện trước các phương thức cụ thể như GET hay POST.",
      "Bảng điều khiển chỉ in ra số '1' vì phương thức app.get có độ ưu tiên cao nhất và nó sẽ tự động chặn mọi phương thức xử lý khác cho cùng một đường dẫn URL.",
      "Máy chủ báo lỗi \"Duplicate Method\" vì bạn không được phép khai báo cả app.get và app.all cho cùng một địa chỉ truy cập bên trong một ứng dụng Express."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Khi gọi \"next('route')\" bên trong một hàm xử lý của route, điều gì sẽ xảy ra?\napp.get('/user', (req, res, next) => {\n if (true) return next('route');\n res.send('A');\n}, (req, res) => {\n res.send('B');\n});\napp.get('/user', (req, res) => {\n res.send('C');\n});",
    "opts": [
      "Trình duyệt hiển thị 'B' vì lệnh next('route') thực chất chỉ là một tên gọi khác của hàm next() thông thường và nó sẽ chuyển quyền điều khiển sang hàm xử lý ngay kế tiếp.",
      "Trình duyệt hiển thị 'C' vì lệnh next('route') sẽ bỏ qua tất cả các hàm xử lý còn lại trong ngăn xếp (stack) hiện tại của route đó và chuyển sang route tiếp theo khớp với đường dẫn.",
      "Máy chủ sẽ báo lỗi \"Invalid Argument\" vì hàm next() chỉ chấp nhận tham số là một đối tượng lỗi (Error) và không chấp nhận các giá trị chuỗi văn bản như 'route'.",
      "Trình duyệt hiển thị 'A' vì hệ thống sẽ hiểu rằng lập trình viên muốn quay lại thực hiện từ đầu các lệnh bên trong hàm xử lý hiện tại để đảm bảo tính toàn vẹn dữ liệu."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Kết quả của đoạn mã xử lý JSON sau là gì khi máy khách gửi dữ liệu hợp lệ?\napp.use(express.json());\napp.post('/save', (req, res) => {\n res.send(req.body.name);\n});",
    "opts": [
      "Máy chủ báo lỗi \"req.body is undefined\" vì middleware express.json chỉ có tác dụng đối với các yêu cầu GET và không hỗ trợ xử lý dữ liệu cho các phương thức như POST hay PUT.",
      "Trình duyệt nhận được giá trị của thuộc tính name từ đối tượng JSON gửi lên vì middleware express.json đã thực hiện việc phân tích thân yêu cầu và gán vào req.body.",
      "Trình duyệt nhận được chuỗi \"[object Object]\" vì Express sẽ tự động chuyển đổi toàn bộ đối tượng nhận được sang định dạng văn bản thô để đảm bảo tốc độ truyền tải nhanh nhất.",
      "Trình duyệt sẽ nhận được nội dung của toàn bộ tệp tin package.json của dự án vì hệ thống sẽ hiểu nhầm tên middleware express.json là một yêu cầu truy cập tệp tin hệ thống."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Mục đích cốt lõi của công cụ \"express-generator\" trong quy trình phát triển Node.js là gì?",
    "opts": [
      "Đây là một trình biên dịch mã nguồn giúp chuyển đổi mã JavaScript của Express sang định dạng mã máy nhị phân để ứng dụng có thể chạy trực tiếp trên các hệ điều hành mà không cần cài đặt Node.js.",
      "Đây là một công cụ dòng lệnh (CLI) giúp tạo nhanh cấu trúc thư mục và các tệp tin cơ bản cho một ứng dụng Express hoàn chỉnh (scaffolding), giúp tiết kiệm thời gian thiết lập dự án ban đầu.",
      "Đây là một thư viện bảo mật giúp tự động mã hóa toàn bộ dữ liệu đường truyền giữa máy chủ và trình duyệt web để ngăn chặn các cuộc tấn công đánh cắp thông tin nhạy cảm của người dùng cuối.",
      "Đây là một trình quản lý gói nâng cao dùng để thay thế hoàn toàn cho npm, có khả năng tự động tải về các thư viện từ internet và nén chúng lại để giảm thiểu tối đa dung lượng bộ nhớ lưu trữ."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Để khởi tạo một dự án sử dụng EJS làm View Engine thông qua express-generator, bạn dùng lệnh nào?",
    "opts": [
      "Lập trình viên sử dụng lệnh express --view=ejs [tên_thư_mục] để yêu cầu công cụ khởi tạo dự án và tự động cấu hình các tham số cần thiết để sử dụng bộ máy giao diện EJS thay cho các lựa chọn khác.",
      "Lập trình viên sử dụng lệnh express --ejs-engine để hệ thống thực hiện việc nạp toàn bộ mã nguồn của EJS vào nhân của Node.js và thiết lập nó làm trình quản lý giao diện mặc định cho toàn hệ thống máy chủ.",
      "Lập trình viên sử dụng lệnh express init ejs và sau đó phải thực hiện thao tác kéo thả các tệp tin mẫu vào thư mục dự án một cách thủ công để hệ thống có thể nhận diện và bắt đầu quá trình thực thi kịch bản.",
      "Lập trình viên sử dụng lệnh express -v ejs và hệ thống sẽ tự động thực hiện việc cài đặt phiên bản EJS mới nhất từ kho lưu trữ npm vào thư mục node_modules mà không cần người dùng phải khai báo thêm."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Thư mục \"bin/www\" được tạo ra bởi express-generator có vai trò gì?",
    "opts": [
      "Đây là nơi chứa các đoạn mã lệnh CSS giúp định dạng giao diện cho bảng điều khiển của nhà phát triển, cho phép họ theo dõi các thông số kỹ thuật của ứng dụng trong quá trình máy chủ đang vận hành.",
      "Đây là nơi lưu trữ toàn bộ các tệp tin hình ảnh và video của trang web để trình duyệt có thể truy cập trực tiếp mà không cần thông qua các hàm xử lý logic của máy chủ Node.js trong ứng dụng web.",
      "Đây là tệp tin kịch bản chính dùng để khởi tạo máy chủ HTTP, thiết lập cổng lắng nghe (port) và thực hiện việc kết nối đối tượng ứng dụng Express vào quy trình vận hành của máy chủ thực tế.",
      "Đây là một thư mục tạm thời dùng để chứa các tệp tin nén của mã nguồn ứng dụng trước khi được triển khai lên các dịch vụ lưu trữ đám mây nhằm mục đích tối ưu hóa băng thông truyền tải dữ liệu qua mạng."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Cấu trúc thư mục mặc định của express-generator bao gồm các thư mục routes và views nhằm mục đích gì?",
    "opts": [
      "Để cho phép máy chủ có thể lưu trữ dữ liệu người dùng trực tiếp vào các tệp tin trong thư mục views mà không cần sử dụng đến các hệ quản trị cơ sở dữ liệu bên ngoài như MySQL hay MongoDB.",
      "Để ngăn chặn các lập trình viên khác trong cùng một nhóm phát triển có thể can thiệp vào các thành phần quan trọng của ứng dụng thông qua việc mã hóa toàn bộ nội dung chứa bên trong hai thư mục này.",
      "Để tách biệt rõ ràng giữa logic xử lý các đường dẫn URL (Routing) và logic hiển thị giao diện cho người dùng (Views), giúp mã nguồn dễ dàng quản lý, bảo trì và mở rộng hơn theo mô hình kiến trúc chuẩn.",
      "Để tự động chuyển đổi mã nguồn JavaScript thành các trang web tĩnh (HTML) nhằm tăng tốc độ tải trang tối đa cho những người dùng truy cập ứng dụng từ các thiết bị di động có cấu hình phần cứng yếu."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Đặc điểm cú pháp nổi bật nhất của EJS (Embedded JavaScript) là gì?",
    "opts": [
      "Sử dụng các thẻ đặc biệt như <% %> để nhúng trực tiếp mã JavaScript vào bên trong mã HTML, cho phép thực hiện các cấu trúc điều khiển như vòng lặp hoặc câu lệnh điều kiện ngay trên giao diện web.",
      "Yêu cầu lập trình viên không được sử dụng các thẻ HTML truyền thống mà phải thay thế hoàn toàn bằng các ký hiệu toán học để hệ thống có thể biên dịch giao diện sang định dạng nhị phân nhanh hơn.",
      "Tự động mã hóa toàn bộ mã nguồn giao diện thành các chuỗi ký tự ngẫu nhiên để ngăn chặn người dùng cuối không thể xem được mã HTML khi thực hiện thao tác kiểm tra phần tử trên trình duyệt web.",
      "Bắt buộc tất cả các tệp tin giao diện phải được viết bằng ngôn ngữ C++ để đảm bảo tốc độ hiển thị hình ảnh và video đạt mức tối đa trên các màn hình có độ phân giải cao như 4K hoặc 8K hiện nay."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Trong EJS, thẻ <%= value %> và <%- value %> khác nhau như thế nào?",
    "opts": [
      "Thẻ <%= %> dùng để thực hiện các vòng lặp, trong khi thẻ <%- %> dùng để thực hiện các câu lệnh điều kiện if-else nhằm mục đích phân loại dữ liệu trước khi hiển thị lên màn hình trình duyệt của khách hàng.",
      "Thẻ <%= %> sẽ thực hiện việc mã hóa các ký tự HTML (escape) để bảo mật, còn thẻ <%- %> sẽ xuất dữ liệu thô (raw) cho phép trình duyệt hiểu và thực thi các thẻ HTML có trong chuỗi dữ liệu đó.",
      "Thẻ <%= %> chỉ có tác dụng đối với các biến kiểu dữ liệu số, còn thẻ <%- %> được thiết kế chuyên biệt để chỉ làm việc với các kiểu dữ liệu chuỗi văn bản có độ dài lớn vượt quá giới hạn thông thường.",
      "Cả hai thẻ thực tế đều có chức năng giống hệt nhau và lập trình viên có thể sử dụng chúng thay thế cho nhau tùy theo sở thích cá nhân mà không gây ra bất kỳ ảnh hưởng nào đến kết quả hiển thị cuối cùng."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Tên gọi ban đầu của công cụ mẫu \"Pug\" trước khi phải đổi tên vì lý do bản quyền là gì?",
    "opts": [
      "Tên gọi ban đầu là HTML-Plus, được thiết kế để thay thế hoàn toàn cho ngôn ngữ đánh dấu siêu văn bản HTML truyền thống bằng cách loại bỏ toàn bộ các thẻ đóng và các thuộc tính phức tạp của nó.",
      "Tên gọi ban đầu là Express-View, vốn là một thành phần cốt lõi của framework Express và được phát triển trực tiếp bởi đội ngũ kỹ sư của công ty Google nhằm mục đích cạnh tranh với các thư viện khác.",
      "Tên gọi ban đầu là EJS-Pro, một phiên bản nâng cấp của thư viện EJS được bổ sung thêm các tính năng mạnh mẽ về quản lý bộ nhớ đệm và tối ưu hóa tốc độ tải trang web cho các ứng dụng thương mại điện tử.",
      "Tên gọi ban đầu là Jade, và lý do của việc đổi tên là do tên này đã được đăng ký bản quyền thương hiệu bởi một công ty phần mềm khác, buộc cộng đồng phát triển phải chọn một tên gọi mới là Pug."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 3
  },
  {
    "q": "Cú pháp đặc trưng nhất giúp mã nguồn Pug (Jade) trở nên cực kỳ ngắn gọn là gì?",
    "opts": [
      "Pug sử dụng cơ chế thụt đầu dòng (indentation) để xác định cấu trúc phân cấp của các phần tử thay vì sử dụng các cặp thẻ đóng mở như <tag></tag> trong HTML truyền thống hay các View Engine khác.",
      "Pug yêu cầu lập trình viên phải viết mã lệnh liên tục trên một dòng duy nhất và sử dụng các dấu phẩy để phân tách giữa các thành phần giao diện nhằm giảm thiểu dung lượng tệp tin mã nguồn của dự án.",
      "Pug tự động loại bỏ toàn bộ các thuộc tính CSS của trang web và thay thế chúng bằng các từ khóa JavaScript để trình duyệt có thể thực hiện việc vẽ giao diện một cách nhanh chóng hơn thông qua card đồ họa.",
      "Pug bắt buộc người dùng phải sử dụng các lệnh dòng lệnh để tạo ra từng phần tử HTML đơn lẻ mỗi khi muốn thay đổi nội dung hiển thị của trang web trong quá trình ứng dụng đang vận hành thực tế."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Trong Pug, làm thế nào để khai báo một thẻ div có lớp là \"container\" và mã định danh là \"header\"?",
    "opts": [
      "Lập trình viên viết theo cấu trúc div.container#header trên một dòng lệnh riêng biệt, hệ thống sẽ tự động nhận diện dấu chấm cho lớp và dấu thăng cho mã định danh để biên dịch sang mã HTML tương ứng.",
      "Lập trình viên phải viết đầy đủ thẻ div class=\"container\" id=\"header\" và thực hiện việc bao bọc toàn bộ đoạn mã này bằng một cặp ngoặc vuông để hệ thống Pug có thể hiểu và xử lý dữ liệu giao diện.",
      "Lập trình viên cần sử dụng lệnh create-div --class=container --id=header và thực thi lệnh này trong môi trường dòng lệnh của hệ điều hành để tạo ra tệp tin giao diện tương ứng cho ứng dụng Node.js.",
      "Lập trình viên sử dụng ký hiệu @div(container, header) và hệ thống sẽ tự động chuyển đổi các tham số bên trong dấu ngoặc thành các thuộc tính phù hợp cho thẻ div khi trang web được hiển thị cho người dùng."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Ưu điểm chính của việc sử dụng các Template Engines thay vì gửi HTML tĩnh từ máy chủ là gì?",
    "opts": [
      "Template Engines giúp máy chủ Node.js không cần phải kết nối internet mà vẫn có thể gửi dữ liệu tới trình duyệt của khách hàng thông qua một giao thức truyền tải dữ liệu bí mật được tích hợp sẵn.",
      "Template Engines cho phép tạo ra các trang web động bằng cách nhúng dữ liệu từ cơ sở dữ liệu vào giao diện, giúp cá nhân hóa nội dung cho từng người dùng cụ thể mà không cần tạo hàng triệu tệp HTML thủ công.",
      "Template Engines bắt buộc người dùng phải trả phí bản quyền cho mỗi lần tải trang web thành công, từ đó giúp tạo ra nguồn thu nhập ổn định cho các doanh nghiệp phát triển ứng dụng web trên toàn thế giới.",
      "Template Engines tự động xóa bỏ toàn bộ các lỗi logic trong mã nguồn của lập trình viên và thay thế chúng bằng các thuật toán tối ưu để ứng dụng có thể chạy nhanh hơn trên các máy tính đời cũ."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Thư viện \"body-parser\" đóng vai trò là loại Middleware nào trong ứng dụng Express?",
    "opts": [
      "Đây là Middleware dùng để quản lý việc đăng nhập của người dùng bằng cách lưu trữ tên tài khoản và mật khẩu vào các tệp tin cookie bí mật được mã hóa an toàn trên trình duyệt web của khách hàng.",
      "Đây là Middleware dùng để phân tích dữ liệu từ thân yêu cầu HTTP (Request Body) được gửi lên từ máy khách, giúp lập trình viên có thể truy cập dữ liệu đó thông qua thuộc tính req.body một cách dễ dàng.",
      "Đây là Middleware chuyên dùng để nén các tệp tin hình ảnh có dung lượng lớn trước khi chúng được tải lên máy chủ nhằm tiết kiệm không gian lưu trữ của ổ đĩa cứng và tăng tốc độ xử lý cho hệ thống.",
      "Đây là Middleware đóng vai trò là một trình diệt virus trực tuyến, nó sẽ tự động quét tất cả các dữ liệu được gửi lên từ người dùng để phát hiện và ngăn chặn các đoạn mã độc hại có ý định tấn công máy chủ."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Khi sử dụng body-parser.urlencoded({ extended: true }), tham số \"extended: true\" có ý nghĩa gì?",
    "opts": [
      "Cho phép ứng dụng Node.js có thể mở rộng phạm vi kết nối tới các máy chủ khác trong cùng mạng nội bộ mà không cần phải thực hiện các thao tác xác thực quyền truy cập phức tạp từ phía người dùng.",
      "Yêu cầu hệ thống phải thực hiện việc kéo dài thời gian chờ (timeout) cho các yêu cầu gửi dữ liệu từ trình duyệt web để đảm bảo rằng các gói tin lớn luôn được truyền tải hoàn tất đến máy chủ của ứng dụng.",
      "Cho phép phân tích các dữ liệu phức tạp được gửi lên dưới dạng các đối tượng lồng nhau (nested objects) bằng cách sử dụng thư viện \"qs\" thay vì chỉ hỗ trợ các chuỗi văn bản đơn giản theo tiêu chuẩn cũ.",
      "Tự động chuyển đổi tất cả các dữ liệu dạng số thành kiểu dữ liệu chuỗi văn bản để đảm bảo tính đồng nhất cho toàn bộ hệ thống cơ sở dữ liệu và tránh các lỗi xung đột kiểu dữ liệu thường gặp trong lập trình."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Tại sao trong các phiên bản Express mới nhất (từ 4.16.0), lập trình viên thường sử dụng express.json() thay vì cài đặt body-parser?",
    "opts": [
      "Vì việc sử dụng express.json() giúp ứng dụng không cần phải tiêu tốn bộ nhớ RAM để thực hiện các thao tác xử lý dữ liệu phức tạp, từ đó tăng hiệu suất hoạt động của trang web lên gấp nhiều lần.",
      "Vì Express đã tích hợp sẵn chức năng của body-parser vào bên trong nhân của framework, giúp lập trình viên có thể sử dụng các tính năng phân tích dữ liệu mà không cần phải cài đặt thêm thư viện bên ngoài.",
      "Vì thư viện body-parser đã bị nhà phát hành Node.js ra lệnh cấm sử dụng do chứa nhiều lỗ hổng bảo mật nghiêm trọng có thể làm rò rỉ dữ liệu của hàng triệu người dùng trên toàn thế giới hiện nay.",
      "Vì phương thức express.json() có khả năng tự động sửa chữa các lỗi cú pháp JSON mà người dùng gửi lên, trong khi body-parser sẽ ngay lập tức làm dừng hoạt động của máy chủ nếu gặp dữ liệu lỗi."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Nếu bạn gửi một yêu cầu POST chứa dữ liệu JSON mà không cấu hình Middleware phân tích body, kết quả của req.body sẽ là gì?",
    "opts": [
      "Giá trị của thuộc tính req.body thường sẽ là undefined hoặc một đối tượng rỗng {}, vì Node.js không tự động xử lý luồng dữ liệu thô từ mạng thành một đối tượng JavaScript nếu không có sự hỗ trợ của Middleware.",
      "Hệ thống sẽ ngay lập tức ném ra một ngoại lệ nghiêm trọng và thực hiện việc khởi động lại toàn bộ máy chủ để thông báo cho lập trình viên biết về việc thiếu hụt các cấu hình quan trọng trong ứng dụng web.",
      "Giá trị của thuộc tính req.body sẽ là một đối tượng JSON hoàn chỉnh chứa toàn bộ các thông tin mà người dùng đã gửi lên máy chủ nhờ vào cơ chế tự động nhận diện dữ liệu của hệ điều hành máy tính.",
      "Giá trị của req.body sẽ chứa toàn bộ mã nguồn của trang web hiện tại để lập trình viên có thể thực hiện việc kiểm tra và chỉnh sửa lại giao diện một cách nhanh chóng ngay trong quá trình xử lý yêu cầu."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Thư viện \"mysql\" trong Node.js thực hiện chức năng chính là gì?",
    "opts": [
      "Đây là một trình điều khiển (driver) cho phép ứng dụng Node.js kết nối, thực hiện các truy vấn SQL và tương tác với các máy chủ cơ sở dữ liệu MySQL đang vận hành trong hệ thống mạng.",
      "Đây là một công cụ đồ họa giúp lập trình viên có thể thiết kế các bảng dữ liệu bằng cách kéo thả các cột và hàng ngay trong môi trường dòng lệnh của Node.js mà không cần viết mã lệnh SQL.",
      "Đây là một thư viện bảo mật giúp tự động mã hóa toàn bộ cơ sở dữ liệu của doanh nghiệp thành các tệp tin hình ảnh để ngăn chặn các cuộc tấn công đánh cắp dữ liệu từ các tin tặc trên toàn thế giới.",
      "Đây là một hệ quản trị cơ sở dữ liệu quan hệ được cài đặt trực tiếp vào bên trong tệp tin thực thi của Node.js giúp ứng dụng có thể lưu trữ dữ liệu mà không cần phải cài đặt phần mềm MySQL Server."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Phương thức \"mysql.createConnection()\" được dùng để làm gì?",
    "opts": [
      "Dùng để thiết lập một cấu hình kết nối duy nhất tới máy chủ cơ sở dữ liệu, yêu cầu lập trình viên phải cung cấp các thông tin như tên máy chủ, tài khoản đăng nhập, mật khẩu và tên của cơ sở dữ liệu cần truy cập.",
      "Dùng để tạo ra hàng triệu kết nối đồng thời tới các máy chủ cơ sở dữ liệu khác nhau trên toàn thế giới nhằm mục đích tăng tốc độ truy xuất dữ liệu cho các ứng dụng có lượng người dùng cực lớn.",
      "Dùng để xóa bỏ toàn bộ các kết nối hiện có và thực hiện việc cài đặt lại hệ quản trị cơ sở dữ liệu MySQL ngay từ đầu để đảm bảo tính ổn định tối đa cho quá trình vận hành của ứng dụng web.",
      "Dùng để thông báo cho hệ điều hành rằng ứng dụng Node.js đang chuẩn bị thực hiện việc gửi các email thông báo tới người dùng và cần được ưu tiên cấp phát thêm băng thông internet để xử lý."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Sự khác biệt quan trọng nhất giữa createConnection và createPool trong thư viện mysql là gì?",
    "opts": [
      "CreateConnection chỉ có thể thực hiện được các lệnh đọc dữ liệu (SELECT), còn CreatePool được thiết kế chuyên biệt để chỉ thực hiện các lệnh thay đổi dữ liệu như INSERT, UPDATE hoặc DELETE trong cơ sở dữ liệu.",
      "Việc sử dụng CreatePool yêu cầu máy tính của lập trình viên phải có kết nối internet tốc độ cao liên tục, còn CreateConnection cho phép ứng dụng vẫn có thể hoạt động bình thường ngay cả khi không có mạng.",
      "CreateConnection tạo ra một kết nối duy nhất và có thể bị ngắt nếu không sử dụng lâu, trong khi CreatePool quản lý một tập hợp các kết nối có thể tái sử dụng, giúp tăng hiệu suất cho các ứng dụng có nhiều người dùng.",
      "CreatePool là một phương thức thu phí bản quyền dành riêng cho các doanh nghiệp lớn, còn CreateConnection là phiên bản miễn phí hoàn toàn dành cho các lập trình viên đang trong quá trình học tập và nghiên cứu."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Để ngăn chặn tấn công SQL Injection khi sử dụng thư viện mysql, lập trình viên nên làm gì?",
    "opts": [
      "Lập trình viên nên thực hiện việc mã hóa toàn bộ mã nguồn của ứng dụng thành các ký tự không thể đọc được để các tin tặc không thể tìm ra vị trí của các đoạn mã thực hiện truy vấn cơ sở dữ liệu.",
      "Lập trình viên cần cài đặt thêm một bộ lọc virus cho máy chủ cơ sở dữ liệu để nó có thể tự động nhận diện và xóa bỏ các câu lệnh SQL nguy hiểm trước khi chúng được thực thi trong hệ thống.",
      "Lập trình viên nên sử dụng kỹ thuật truyền tham số thông qua dấu hỏi chấm (?) trong câu lệnh truy vấn thay vì cộng chuỗi trực tiếp các giá trị từ người dùng vào nội dung của lệnh SQL.",
      "Lập trình viên nên yêu cầu người dùng phải cung cấp mật khẩu quản trị cao nhất của máy chủ cơ sở dữ liệu mỗi khi họ muốn thực hiện một thao tác tìm kiếm hoặc cập nhật thông tin cá nhân trên web."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Kết quả trả về của phương thức connection.query() khi thực hiện lệnh SELECT thường là định dạng nào?",
    "opts": [
      "Hệ thống sẽ tự động thực hiện việc hiển thị dữ liệu lên màn hình bảng điều khiển và không trả về bất kỳ giá trị nào cho biến nhận kết quả để đảm bảo tính bảo mật và tránh rò rỉ thông tin người dùng.",
      "Hệ thống sẽ trả về một mảng chứa các đối tượng JavaScript, trong đó mỗi đối tượng đại diện cho một hàng dữ liệu (row) được tìm thấy trong bảng cơ sở dữ liệu tương ứng với điều kiện truy vấn.",
      "Hệ thống sẽ trả về một tệp tin nén có định dạng .zip chứa toàn bộ các bản ghi dữ liệu đã được mã hóa an toàn nhằm mục đích tiết kiệm dung lượng đường truyền mạng giữa máy chủ và trình duyệt web.",
      "Hệ thống sẽ trả về một con số nguyên duy nhất đại diện cho tổng số lượng các bảng dữ liệu hiện đang tồn tại bên trong cơ sở dữ liệu mà ứng dụng Node.js đang thực hiện việc kết nối và tương tác."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Phương thức connection.end() có nhiệm vụ gì trong vòng đời của một ứng dụng?",
    "opts": [
      "Thực hiện việc xóa toàn bộ dữ liệu trong cơ sở dữ liệu để kết thúc dự án và chuẩn bị cho việc bàn giao mã nguồn cho khách hàng sau khi quá trình phát triển ứng dụng đã hoàn tất hoàn toàn.",
      "Tự động chuyển đổi toàn bộ cơ sở dữ liệu sang định dạng Excel để lập trình viên có thể thực hiện việc xem và chỉnh sửa các thông tin người dùng một cách trực quan trên các phần mềm văn phòng.",
      "Đóng kết nối hiện tại tới máy chủ cơ sở dữ liệu một cách an toàn sau khi tất cả các truy vấn đang chờ xử lý đã hoàn thành, giúp giải phóng tài nguyên cho hệ thống và tránh lãng phí kết nối.",
      "Thông báo cho người dùng biết rằng ứng dụng đang chuẩn bị ngừng hoạt động và yêu cầu họ phải thực hiện việc lưu lại toàn bộ các công việc đang làm dở trên trình duyệt web ngay lập tức."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Thư viện \"express-session\" được sử dụng để giải quyết vấn đề lớn nhất nào của giao thức HTTP?",
    "opts": [
      "Giải quyết vấn đề giao thức HTTP là một giao thức không trạng thái (stateless), giúp ứng dụng có thể ghi nhớ thông tin của người dùng (như trạng thái đăng nhập) qua nhiều yêu cầu khác nhau.",
      "Giải quyết vấn đề tốn kém điện năng của máy chủ khi vận hành ứng dụng web bằng cách tự động tắt các tiến trình Node.js không sử dụng và chỉ khởi động lại khi có yêu cầu từ phía người dùng.",
      "Giải quyết vấn đề tốc độ truyền tải dữ liệu của HTTP quá chậm bằng cách nén toàn bộ các gói tin dữ liệu thành định dạng ánh sáng để có thể di chuyển với tốc độ cực nhanh trong các sợi cáp quang.",
      "Giải quyết vấn đề bảo mật của giao thức HTTP bằng cách tự động thay đổi địa chỉ IP của máy chủ liên tục để các tin tặc không thể tìm ra vị trí thực tế của ứng dụng đang vận hành trên internet."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Tham số \"secret\" trong cấu hình express-session được dùng để làm gì?",
    "opts": [
      "Đây là một chuỗi ký tự bí mật được sử dụng để ký và mã hóa Session ID trong Cookie, giúp ngăn chặn việc người dùng có thể tự ý chỉnh sửa hoặc giả mạo thông tin định danh của mình.",
      "Đây là mật khẩu đăng nhập vào máy chủ quản trị của Google giúp ứng dụng Node.js có thể tự động đồng bộ hóa toàn bộ dữ liệu người dùng lên hệ thống lưu trữ đám mây của tập đoàn này.",
      "Đây là một đoạn mã khóa dùng để mở khóa các tính năng cao cấp của thư viện express-session mà thông thường lập trình viên phải trả phí bản quyền hàng tháng thì mới có thể truy cập được.",
      "Đây là một thông điệp bí mật sẽ được hiển thị lên màn hình trình duyệt web mỗi khi người dùng thực hiện thao tác đăng nhập không thành công nhằm mục đích trêu chọc và gây cười cho họ."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Dữ liệu của session thường được lưu trữ ở đâu theo mặc định khi sử dụng express-session?",
    "opts": [
      "Dữ liệu được lưu trữ vĩnh viễn bên trong ổ đĩa cứng của máy tính người dùng cuối dưới định dạng các tệp tin văn bản không thể xóa để đảm bảo ứng dụng luôn ghi nhớ được họ là ai.",
      "Dữ liệu được lưu trữ bên trong mã nguồn JavaScript của ứng dụng và lập trình viên phải thực hiện việc cập nhật mã nguồn thủ công mỗi khi có một người dùng mới đăng ký tài khoản thành công.",
      "Dữ liệu được lưu trữ trực tiếp trong bộ nhớ RAM (Memory Store) của máy chủ Node.js, điều này rất nhanh nhưng dữ liệu sẽ bị mất hoàn toàn nếu máy chủ bị khởi động lại hoặc bị sập đột ngột.",
      "Dữ liệu được lưu trữ trên các máy chủ vệ tinh của không gian vũ trụ để đảm bảo rằng ngay cả khi trái đất gặp sự cố thì thông tin đăng nhập của người dùng vẫn luôn được an toàn tuyệt đối."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Tham số \"resave: false\" trong cấu hình session có ý nghĩa gì?",
    "opts": [
      "Nó ngăn chặn việc ghi lại session vào kho lưu trữ nếu session đó không có bất kỳ sự thay đổi nào trong quá trình xử lý yêu cầu, giúp giảm bớt gánh nặng cho hệ thống lưu trữ và tăng hiệu suất.",
      "Nó thông báo cho hệ thống rằng ứng dụng không bao giờ cho phép người dùng có thể thực hiện việc lưu lại mật khẩu của mình trên trình duyệt web để đảm bảo tính an toàn tối đa cho tài khoản.",
      "Nó yêu cầu máy chủ phải thực hiện việc xóa sạch toàn bộ lịch sử truy cập của người dùng ngay sau khi họ đóng trình duyệt để đảm bảo rằng không có bất kỳ ai có thể theo dõi được hoạt động của họ.",
      "Nó là một lệnh cấm không cho phép ứng dụng Node.js có thể thực hiện việc cập nhật các phiên bản mới của thư viện express-session nhằm mục đích duy trì tính ổn định tuyệt đối cho mã nguồn."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Tham số \"saveUninitialized: false\" thường được khuyến khích sử dụng vì lý do gì?",
    "opts": [
      "Để bắt buộc hệ thống phải tạo ra hàng triệu session ảo ngay khi máy chủ vừa khởi động nhằm mục đích đánh lừa các tin tặc và khiến họ không thể tìm ra session thực sự của những người dùng hợp lệ.",
      "Để thông báo cho người dùng biết rằng ứng dụng của họ vẫn đang trong quá trình thử nghiệm và chưa sẵn sàng để lưu trữ bất kỳ thông tin cá nhân nào của họ vào hệ thống cơ sở dữ liệu chính thức.",
      "Để tránh việc tạo ra các session mới cho những người dùng chỉ vừa mới truy cập trang web mà chưa thực hiện bất kỳ hành động nào (như đăng nhập), giúp tiết kiệm tài nguyên lưu trữ của máy chủ.",
      "Để yêu cầu lập trình viên phải thực hiện việc khởi tạo các biến toàn cục cho mỗi người dùng một cách thủ công ngay từ khi họ vừa bắt đầu truy cập vào địa chỉ URL của trang web ứng dụng."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Để lưu một thông tin vào session (ví dụ: username), bạn thực hiện câu lệnh nào trong hàm xử lý của Express?",
    "opts": [
      "Lập trình viên phải viết một đoạn mã SQL phức tạp để thực hiện việc chèn dữ liệu vào bảng session bên trong cơ sở dữ liệu MySQL mỗi khi muốn ghi nhớ tên tài khoản của khách hàng truy cập.",
      "Lập trình viên thực hiện việc gán giá trị trực tiếp vào thuộc tính req.session.username, sau đó hệ thống sẽ tự động lưu trữ thông tin này vào kho lưu trữ session đã được cấu hình trước đó.",
      "Lập trình viên phải sử dụng lệnh session.save('username', value) và thực thi lệnh này trong cửa sổ dòng lệnh của hệ điều hành để đảm bảo dữ liệu được ghi vào ổ đĩa cứng của máy chủ web.",
      "Lập trình viên cần gửi một yêu cầu HTTP POST tới máy chủ của thư viện express-session và đợi phản hồi xác nhận từ phía họ thì mới có thể chính thức lưu trữ thông tin của người dùng hiện tại."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Làm thế nào để xóa một session (ví dụ: khi người dùng đăng xuất)?",
    "opts": [
      "Lập trình viên yêu cầu người dùng phải thực hiện việc cài đặt lại hệ điều hành của máy tính để đảm bảo rằng toàn bộ các tệp tin cookie bí mật đã được xóa sạch hoàn toàn khỏi bộ nhớ của thiết bị.",
      "Sử dụng phương thức req.session.clearAllData() để yêu cầu hệ thống thực hiện việc xóa sạch toàn bộ cơ sở dữ liệu của ứng dụng nhằm mục đích kết thúc phiên làm việc của tất cả các người dùng.",
      "Sử dụng phương thức req.session.destroy() để xóa bỏ hoàn toàn dữ liệu session hiện tại khỏi kho lưu trữ và thực hiện việc giải phóng Cookie định danh trên trình duyệt của người dùng cuối.",
      "Lập trình viên thực hiện việc rút dây nguồn của máy chủ Node.js để đảm bảo rằng toàn bộ các tiến trình đang chạy sẽ bị dừng lại ngay lập tức và toàn bộ dữ liệu tạm thời sẽ bị biến mất hoàn toàn."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Cookie mà express-session gửi về trình duyệt thường chứa thông tin gì?",
    "opts": [
      "Nó chứa toàn bộ thông tin cá nhân của người dùng bao gồm tên đăng nhập, mật khẩu, địa chỉ nhà và số điện thoại dưới định dạng văn bản thô để trình duyệt có thể dễ dàng hiển thị lên màn hình.",
      "Nó chỉ chứa một chuỗi ký tự duy nhất gọi là Session ID đã được ký bảo mật, dùng để đối chiếu với dữ liệu thực tế đang được lưu trữ an toàn phía máy chủ mỗi khi người dùng gửi yêu cầu.",
      "Nó chứa danh sách tất cả các trang web khác mà người dùng đã từng truy cập trong quá khứ để ứng dụng có thể thực hiện việc phân tích hành vi và hiển thị các quảng cáo sản phẩm phù hợp hơn.",
      "Nó chứa các đoạn mã độc giúp máy chủ Node.js có thể chiếm quyền điều khiển máy tính của người dùng và thực hiện các tác vụ đào tiền ảo một cách bí mật trong khi họ đang xem trang web."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Nếu người dùng tắt Cookie trên trình duyệt, thư viện express-session sẽ hoạt động như thế nào?",
    "opts": [
      "Thư viện sẽ không thể nhận diện được người dùng qua các yêu cầu khác nhau vì Session ID không thể được lưu trữ và gửi ngược lại máy chủ, dẫn đến việc mất trạng thái phiên làm việc.",
      "Thư viện sẽ tự động kích hoạt tính năng nhận diện người dùng thông qua dấu vân tay được quét từ màn hình cảm ứng của thiết bị để tiếp tục duy trì trạng thái đăng nhập cho họ một cách bình thường.",
      "Thư viện sẽ gửi một nhân viên kỹ thuật tới tận nhà của người dùng để thực hiện việc cấu hình lại trình duyệt web cho họ nhằm đảm bảo ứng dụng có thể hoạt động ổn định nhất có thể.",
      "Thư viện sẽ tự động thực hiện việc mã hóa toàn bộ màn hình máy tính của người dùng và yêu cầu họ phải bật lại tính năng Cookie thì mới có thể tiếp tục sử dụng các dịch vụ của trang web."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Để đảm bảo session chỉ được gửi qua các kết nối bảo mật HTTPS, bạn cần cấu hình thuộc tính nào?",
    "opts": [
      "Yêu cầu lập trình viên phải thực hiện việc viết mã nguồn bằng một loại mực bí mật mà chỉ có những máy chủ có chứng chỉ SSL mới có khả năng đọc và hiểu được các lệnh lập trình JavaScript.",
      "Thiết lập thuộc tính session.antiHack thành giá trị true để ứng dụng có thể tự động phát hiện và tiêu diệt các yêu cầu kết nối không an toàn ngay từ khi chúng vừa bắt đầu tiếp cận máy chủ.",
      "Thiết lập thuộc tính cookie.secure thành giá trị true trong đối tượng cấu hình của express-session, điều này sẽ ngăn chặn trình duyệt gửi Cookie định danh qua các kết nối HTTP không bảo mật.",
      "Thiết lập thuộc tính security.highLevel thành giá trị true để yêu cầu hệ thống phải thực hiện việc mã hóa dữ liệu bằng các thuật toán được sử dụng trong lĩnh vực quân sự và hàng không vũ trụ hiện nay."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Giả sử bạn sử dụng express-generator để tạo dự án. Trong tệp bin/www có đoạn mã: var port = normalizePort(process.env.PORT || '3000');. Nếu bạn chạy lệnh SET PORT=5000 && node bin/www, ứng dụng sẽ lắng nghe ở cổng nào?",
    "opts": [
      "Ứng dụng sẽ lắng nghe ở cổng 3000 vì giá trị mặc định '3000' trong mã nguồn luôn có độ ưu tiên cao nhất so với các biến môi trường được thiết lập từ bên ngoài hệ thống.",
      "Ứng dụng sẽ lắng nghe ở cổng 5000 vì thuộc tính process.env.PORT đã được gán giá trị 5000 từ dòng lệnh, và toán tử logic OR (||) sẽ chọn giá trị \"truthy\" đầu tiên được tìm thấy.",
      "Ứng dụng sẽ gặp lỗi vì Node.js không cho phép thay đổi cổng lắng nghe thông qua các biến môi trường sau khi tệp tin bin/www đã được biên dịch sang mã máy nhị phân.",
      "Ứng dụng sẽ tự động chọn một cổng ngẫu nhiên trong khoảng từ 3000 đến 5000 để đảm bảo không bị xung đột với các ứng dụng khác đang chạy trên cùng một máy chủ."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Cho đoạn mã EJS sau: <% var user = \"<b>Tiến</b>\"; %> <%= user %>. Kết quả hiển thị trên trình duyệt là gì?",
    "opts": [
      "Trình duyệt sẽ không hiển thị nội dung nào cả vì biến user được khai báo bên trong thẻ <% %> là biến cục bộ và không thể truy cập được từ các thẻ xuất dữ liệu khác.",
      "Trình duyệt sẽ hiển thị chữ Tiến được in đậm vì thẻ <%= %> thực hiện việc xuất dữ liệu và cho phép trình duyệt thực thi các thẻ HTML có trong chuỗi văn bản.",
      "Trình duyệt sẽ hiển thị nguyên văn chuỗi ký tự <b>Tiến</b> (bao gồm cả các thẻ b) vì thẻ <%= %> thực hiện cơ chế \"escape\" để mã hóa các ký tự đặc biệt của HTML nhằm bảo mật.",
      "Hệ thống sẽ báo một lỗi cú pháp nghiêm trọng vì chúng ta không được phép nhúng các thẻ HTML vào bên trong các biến chuỗi khi sử dụng bộ máy giao diện EJS trong Express."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Dự đoán kết quả HTML được sinh ra từ đoạn mã Pug (Jade) sau: p#main.text-blue Hello?",
    "opts": [
      "Hệ thống sinh ra đoạn mã <p id=\"main\" class=\"text-blue\">Hello</p> vì trong Pug, dấu thăng (#) dùng để định nghĩa thuộc tính id và dấu chấm (.) dùng để định nghĩa thuộc tính class cho thẻ.",
      "Hệ thống sinh ra đoạn mã <p class=\"main text-blue\">Hello</p> vì Pug sẽ mặc định gộp tất cả các giá trị nằm sau tên thẻ vào thuộc tính class của phần tử HTML để đơn giản hóa cấu trúc.",
      "Hệ thống sinh ra đoạn mã <p id=\"main text-blue\">Hello</p> vì dấu thăng có độ ưu tiên cao hơn và nó sẽ bao trùm toàn bộ các chuỗi văn bản đi kèm phía sau để tạo thành một định danh duy nhất.",
      "Hệ thống sẽ báo lỗi vì lập trình viên không được phép viết dính liền các ký hiệu định nghĩa id và class mà phải phân tách chúng bằng các dấu cách hoặc dấu phẩy theo quy định của Pug."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Trong tệp app.js do generator tạo ra, nếu bạn đổi thứ tự: app.use(express.static(...)) lên trên app.use('/', indexRouter), chuyện gì sẽ xảy ra?",
    "opts": [
      "Ứng dụng sẽ chạy nhanh hơn gấp hai lần vì việc phục vụ các tệp tĩnh trước sẽ giúp giải phóng tài nguyên bộ nhớ cho các tác vụ xử lý logic phức tạp hơn ở các route phía dưới.",
      "Toàn bộ ứng dụng sẽ bị lỗi vì các route xử lý logic bắt buộc phải luôn được đặt ở vị trí đầu tiên để Node.js có thể nhận diện và xử lý các yêu cầu từ người dùng một cách chính xác.",
      "Nếu người dùng truy cập một đường dẫn trùng tên với tệp trong thư mục public, tệp tĩnh đó sẽ được gửi về thay vì chạy vào indexRouter, vì Express thực thi middleware theo thứ tự khai báo.",
      "Không có bất kỳ sự thay đổi nào xảy ra vì Express có cơ chế trí tuệ nhân tạo tự động nhận diện đâu là tệp tĩnh và đâu là route xử lý để điều hướng yêu cầu một cách thông minh nhất."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Cho đoạn mã Pug: each val in [1, 2, 3]\\n p= val * 2. Kết quả in ra là gì?",
    "opts": [
      "Hệ thống sẽ in ra ba thẻ đoạn văn <p>2</p>, <p>4</p>, <p>6</p> vì vòng lặp each sẽ duyệt qua mảng và biểu thức sau dấu bằng sẽ được tính toán trước khi gán vào nội dung thẻ.",
      "Hệ thống sẽ in ra ba thẻ đoạn văn với nội dung lần lượt là các số 1, 2 và 3 vì dấu bằng trong Pug chỉ dùng để gán giá trị gốc mà không thực hiện được các phép toán số học.",
      "Hệ thống sẽ báo lỗi cú pháp vì vòng lặp each của Pug chỉ chấp nhận các mảng chứa dữ liệu dạng chuỗi văn bản và không hỗ trợ xử lý các mảng chứa dữ liệu dạng số nguyên.",
      "Hệ thống sẽ in ra một thẻ đoạn văn duy nhất chứa chuỗi \"246\" vì kết quả của vòng lặp sẽ được hệ thống tự động nối lại thành một chuỗi văn bản để tối ưu hóa dung lượng HTML."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Cho đoạn mã: app.use(express.json()); app.post('/data', (req, res) => res.send(req.body.name));. Nếu máy khách gửi một yêu cầu POST với body là { \"name\": \"Thắng\" }, trình duyệt hiển thị gì?",
    "opts": [
      "Máy chủ sẽ báo lỗi 500 vì phương thức res.send chỉ chấp nhận các tham số là đối tượng JSON hoàn chỉnh chứ không chấp nhận một thuộc tính chuỗi đơn lẻ từ đối tượng req.body.",
      "Trình duyệt hiển thị chữ \"Thắng\" vì middleware express.json() đã phân tích dữ liệu JSON từ yêu cầu và gán nó vào thuộc tính req.body để lập trình viên có thể truy cập dễ dàng.",
      "Trình duyệt hiển thị \"undefined\" vì mặc dù đã có middleware nhưng dữ liệu JSON gửi lên bắt buộc phải được mã hóa sang định dạng Base64 thì hệ thống mới có khả năng giải mã và sử dụng.",
      "Trình duyệt sẽ hiển thị toàn bộ đối tượng { \"name\": \"Thắng\" } vì Express không hỗ trợ việc trích xuất từng thuộc tính riêng lẻ từ thân yêu cầu mà chỉ cho phép lấy toàn bộ dữ liệu."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Giả sử bạn quên dòng app.use(express.urlencoded({ extended: false })); nhưng vẫn cố gắng truy cập req.body.username từ một form POST. Kết quả là gì?",
    "opts": [
      "Hệ thống sẽ tự động tìm kiếm thông tin username từ các tệp tin cookie của người dùng để thay thế cho phần dữ liệu bị thiếu hụt do lập trình viên quên khai báo middleware.",
      "Ứng dụng sẽ ném ra lỗi ngoại lệ \"ReferenceError: req.body is not defined\" và ngay lập tức dừng hoạt động của máy chủ để yêu cầu lập trình viên phải bổ sung cấu hình cần thiết.",
      "Thuộc tính req.body sẽ có giá trị là undefined, dẫn đến việc truy cập req.body.username sẽ gây ra lỗi vì bạn không thể đọc thuộc tính của một giá trị không xác định.",
      "Express sẽ tự động kích hoạt một middleware mặc định để xử lý dữ liệu form nhằm đảm bảo ứng dụng luôn hoạt động ổn định nhất có thể cho dù lập trình viên có quên cấu hình."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Cho đoạn mã MySQL: connection.query('SELECT * FROM users WHERE id = ?', [5], (err, results) => { ... });. Giá trị số 5 sẽ thay thế vị trí nào?",
    "opts": [
      "Số 5 sẽ được dùng để giới hạn số lượng bản ghi trả về (LIMIT 5) bất kể câu lệnh SQL ban đầu có chứa các từ khóa liên quan đến việc giới hạn dữ liệu hay không.",
      "Số 5 sẽ thay thế cho tên của bảng \"users\" để hệ thống thực hiện việc tìm kiếm dữ liệu trong bảng thứ 5 của cơ sở dữ liệu thay vì bảng đã được lập trình viên chỉ định.",
      "Số 5 sẽ thay thế cho dấu hỏi chấm (?) trong câu lệnh SQL, đây là kỹ thuật sử dụng placeholder giúp ngăn chặn các cuộc tấn công SQL Injection bằng cách xử lý dữ liệu an toàn.",
      "Số 5 thực chất là mã định danh của kết nối và nó sẽ không được đưa vào câu lệnh SQL mà chỉ dùng để xác thực quyền truy cập của ứng dụng vào máy chủ cơ sở dữ liệu."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Dự đoán kết quả của results[0].username trong callback của lệnh: SELECT username FROM users nếu bảng có 2 hàng là 'Tiến' và 'Thắng'?",
    "opts": [
      "Kết quả trả về là chuỗi văn bản \"Tiến\" vì results là một mảng các đối tượng, trong đó results[0] tương ứng với hàng dữ liệu đầu tiên và .username là thuộc tính của hàng đó.",
      "Hệ thống sẽ trả về giá trị undefined vì kết quả trả về từ cơ sở dữ liệu luôn ở định dạng nhị phân thô và lập trình viên phải thực hiện giải mã sang JSON trước khi truy cập.",
      "Kết quả trả về là một mảng bao gồm cả hai chuỗi ['Tiến', 'Thắng'] vì thuộc tính results[0] đại diện cho cột đầu tiên của tất cả các hàng dữ liệu được tìm thấy trong bảng.",
      "Kết quả trả về là giá trị số 2 đại diện cho tổng số lượng hàng dữ liệu mà câu lệnh SELECT đã truy xuất được từ bảng users bên trong hệ quản trị cơ sở dữ liệu MySQL."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Nếu lệnh SQL là UPDATE users SET name = ? WHERE id = ? và mảng tham số là ['Cao Thắng', 1], thuộc tính results.affectedRows sẽ trả về gì nếu có 1 hàng bị đổi?",
    "opts": [
      "Trả về giá trị số 1, đại diện cho số lượng hàng trong cơ sở dữ liệu đã bị thay đổi thông tin thành công sau khi câu lệnh cập nhật được máy chủ MySQL thực thi.",
      "Trả về chuỗi văn bản \"Cao Thắng\" vì hệ thống sẽ lấy giá trị của tham số đầu tiên để làm kết quả phản hồi cho thuộc tính thông báo trạng thái của tác vụ cập nhật dữ liệu.",
      "Trả về giá trị logic true để xác nhận rằng kết nối tới máy chủ cơ sở dữ liệu vẫn đang hoạt động tốt và câu lệnh SQL đã được gửi đi thành công mà không gặp trở ngại nào.",
      "Trả về giá trị undefined vì đối tượng results chỉ chứa dữ liệu khi thực hiện lệnh SELECT, còn đối với các lệnh thay đổi dữ liệu thì kết quả sẽ được trả về thông qua biến err."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Cho đoạn mã: req.session.views = (req.session.views || 0) + 1; res.send(req.session.views.toString());. Ở lần truy cập đầu tiên, trình duyệt hiển thị gì?",
    "opts": [
      "Trình duyệt hiển thị số 1 vì ở lần đầu, biểu thức req.session.views là undefined, nên nó sẽ lấy số 0 cộng thêm 1 và gán lại vào session trước khi gửi phản hồi.",
      "Trình duyệt sẽ không hiển thị gì cả và máy chủ báo lỗi vì bạn không thể thực hiện phép cộng trên một thuộc tính của session khi session đó chưa được khởi tạo giá trị.",
      "Trình duyệt hiển thị số 0 vì giá trị ban đầu của biến chưa được xác định và hệ thống sẽ mặc định lấy giá trị sau toán tử OR để hiển thị cho người dùng cuối.",
      "Trình duyệt hiển thị chữ \"undefined1\" vì JavaScript sẽ thực hiện phép nối chuỗi giữa giá trị không xác định và con số 1 thay vì thực hiện một phép tính cộng số học."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Sau khi chạy lệnh req.session.destroy();, nếu bạn cố gắng truy cập req.session.user ở dòng lệnh ngay phía sau trong cùng một hàm xử lý, kết quả là gì?",
    "opts": [
      "Bạn vẫn truy cập được giá trị cũ vì phương thức destroy() chỉ có tác dụng sau khi hàm xử lý route kết thúc hoàn toàn và dữ liệu được ghi xuống kho lưu trữ session.",
      "Giá trị trả về sẽ là một thông báo lỗi \"Session Destroyed\" dưới dạng chuỗi văn bản để lập trình viên biết rằng phiên làm việc của người dùng hiện đã kết thúc.",
      "Thuộc tính req.session sẽ bị xóa hoàn toàn hoặc trở thành undefined, dẫn đến việc truy cập vào thuộc tính con .user sẽ gây ra lỗi thực thi chương trình.",
      "Hệ thống sẽ tự động khôi phục lại dữ liệu session từ bộ nhớ đệm để đảm bảo ứng dụng không bị gián đoạn và lập trình viên vẫn có thể tiếp tục sử dụng dữ liệu."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Giả sử bạn cấu hình cookie: { maxAge: 1000 } (mili giây). Sau 2 giây kể từ khi người dùng nhận được cookie, chuyện gì xảy ra với req.session?",
    "opts": [
      "Session vẫn tồn tại mãi mãi trên máy chủ vì thuộc tính maxAge chỉ có tác dụng thông báo cho trình duyệt biết khi nào nên xóa tệp tin cookie ở phía máy khách mà thôi.",
      "Trình duyệt sẽ xóa cookie và không gửi nó lên máy chủ nữa, khiến Node.js không thể định danh được người dùng và req.session sẽ được khởi tạo lại như một phiên mới.",
      "Máy chủ sẽ tự động gửi một yêu cầu cập nhật tới trình duyệt để gia hạn thêm thời gian sống cho cookie nhằm đảm bảo người dùng không bị đăng xuất đột ngột khỏi hệ thống.",
      "Dữ liệu trong session sẽ được tự động chuyển đổi sang trạng thái lưu trữ vĩnh viễn trong cơ sở dữ liệu để lập trình viên có thể truy xuất lại bất cứ khi nào cần thiết."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Nếu bạn gán req.session.role = 'admin'; và sau đó gọi req.session.save();, tham số save() có vai trò gì?",
    "opts": [
      "Nó thực hiện việc sao lưu toàn bộ dữ liệu của người dùng hiện tại vào một tệp tin văn bản bí mật trên ổ đĩa cứng của máy chủ để phục vụ cho mục đích gỡ lỗi sau này.",
      "Nó là một phương thức dùng để kiểm tra xem session hiện tại có còn hoạt động hay không và sẽ trả về một giá trị logic true hoặc false cho lập trình viên ứng dụng.",
      "Nó buộc hệ thống phải ghi dữ liệu session vào kho lưu trữ ngay lập tức thay vì đợi đến cuối chu kỳ phản hồi HTTP, giúp đảm bảo dữ liệu được cập nhật tức thì.",
      "Nó yêu cầu trình duyệt web của người dùng phải thực hiện việc mã hóa lại toàn bộ thông tin session trước khi gửi ngược lại cho máy chủ trong lần truy cập kế tiếp."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Cho đoạn mã: req.session.isLoggedIn = true; res.redirect('/dashboard');. Tại route /dashboard, giá trị của req.session.isLoggedIn là bao nhiêu?",
    "opts": [
      "Giá trị là undefined vì phương thức redirect sẽ xóa sạch toàn bộ dữ liệu trong session hiện tại để đảm bảo an toàn bảo mật cho phiên làm việc mới của người dùng.",
      "Giá trị là true vì dữ liệu trong session được lưu trữ ở phía máy chủ và gắn liền với Session ID của người dùng, cho phép truy cập xuyên suốt các route khác nhau.",
      "Giá trị là null vì dữ liệu session chỉ có hiệu lực trong vòng đời của một yêu cầu HTTP duy nhất và sẽ tự động biến mất khi yêu cầu đó được hoàn thành thành công.",
      "Giá trị là true nhưng chỉ khi lập trình viên thực hiện việc truyền giá trị này qua tham số của địa chỉ URL trong câu lệnh redirect (ví dụ: /dashboard?status=true)."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Trong một ứng dụng Express, nếu bạn thực hiện: res.locals.username = req.session.user; res.render('profile');. Tại tệp profile.ejs, bạn truy cập username như thế nào?",
    "opts": [
      "Bạn có thể truy cập trực tiếp bằng cách viết <%= username %> vì đối tượng res.locals là nơi Express dùng để truyền dữ liệu từ middleware/route sang View Engine.",
      "Bạn phải sử dụng một hàm trung gian có tên là getData('username') để hệ thống thực hiện việc trích xuất dữ liệu từ bộ nhớ đệm của máy chủ Node.js và hiển thị.",
      "Bạn phải truy cập thông qua đối tượng toàn cục bằng cách viết <%= req.session.user %> vì dữ liệu từ session không được tự động chuyển sang bộ máy giao diện.",
      "Bạn không thể truy cập được giá trị này vì các biến được định nghĩa trong res.locals sẽ bị xóa sạch ngay sau khi lệnh res.render bắt đầu thực hiện quy trình biên dịch."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Cho đoạn mã: app.use(express.urlencoded({ extended: false }));. Nếu form gửi lên có dữ liệu lồng nhau như user[name]=Tien, kết quả của req.body.user.name là gì?",
    "opts": [
      "Máy chủ sẽ báo lỗi cú pháp nghiêm trọng vì định dạng dữ liệu có chứa dấu ngoặc vuông bị coi là không hợp lệ đối với phương thức truyền tải dữ liệu urlencoded.",
      "Kết quả trả về là chuỗi \"Tien\" vì Express sẽ tự động phân tích các dấu ngoặc vuông để tạo ra các đối tượng JavaScript lồng nhau một cách hoàn toàn tự động.",
      "Kết quả trả về là undefined vì với cấu hình extended: false, hệ thống sử dụng thư viện querystring vốn không hỗ trợ việc phân tích các đối tượng phức tạp lồng nhau.",
      "Kết quả trả về là chuỗi văn bản \"user[name]\" vì hệ thống sẽ coi toàn bộ tên của trường nhập liệu là một khóa duy nhất trong đối tượng mà không thực hiện phân tách."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Điều gì xảy ra nếu bạn gọi res.render('index') nhưng quên chưa cài đặt View Engine bằng app.set('view engine', 'ejs')?",
    "opts": [
      "Express sẽ tự động tìm kiếm và cài đặt bộ máy giao diện EJS từ kho lưu trữ npm để đảm bảo ứng dụng có thể hiển thị giao diện cho người dùng một cách bình thường.",
      "Máy chủ sẽ ném ra lỗi thông báo rằng bạn chưa định nghĩa view engine và ứng dụng sẽ dừng hoạt động vì nó không biết cách biên dịch tệp tin giao diện index.",
      "Trình duyệt sẽ tải về tệp tin index.ejs dưới dạng một tệp văn bản thô thay vì hiển thị nó dưới dạng một trang web HTML đã được định dạng và xử lý dữ liệu.",
      "Express sẽ mặc định sử dụng bộ máy giao diện Pug (Jade) để thực hiện việc biên dịch tệp tin index vì đây là lựa chọn được tích hợp sẵn trong nhân của framework."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Kết quả của console.log(req.sessionID) sẽ thay đổi như thế nào sau khi người dùng thực hiện đăng nhập và session được tạo mới?",
    "opts": [
      "Giá trị này sẽ thay đổi thành một chuỗi ký tự mới hoàn toàn để đảm bảo tính bảo mật và ngăn chặn các cuộc tấn công chiếm đoạt phiên làm việc của người dùng khác.",
      "Giá trị này sẽ trở thành rỗng (null) vì Node.js sẽ thực hiện việc ẩn mã định danh session đi để bảo vệ thông tin nhạy cảm khỏi việc bị rò rỉ ra các tệp tin nhật ký.",
      "Giá trị này sẽ giữ nguyên không đổi vì mỗi thiết bị của người dùng sẽ được hệ thống cấp phát một mã định danh duy nhất và cố định trong suốt vòng đời của ứng dụng.",
      "Giá trị này sẽ được chuyển đổi sang định dạng số nguyên tăng dần để giúp máy chủ có thể quản lý và sắp xếp các phiên làm việc của người dùng một cách dễ dàng hơn."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Cho đoạn mã MySQL trong route: db.query('SELECT * FROM items', (err, rows) => { res.render('list', { items: rows }); });. Trong list.ejs, items.length trả về gì nếu bảng rỗng?",
    "opts": [
      "Trả về giá trị số 0 vì khi bảng không có dữ liệu, MySQL trả về một mảng rỗng [], và thuộc tính length của một mảng không có phần tử luôn luôn bằng 0.",
      "Trả về giá trị undefined vì khi không tìm thấy dữ liệu, biến rows sẽ không được khởi tạo và hệ thống sẽ ném ra lỗi khi truy cập vào thuộc tính length của nó.",
      "Trình duyệt sẽ hiển thị một thông báo lỗi \"Database Empty\" vì EJS không cho phép thực hiện việc truy cập các thuộc tính của mảng nếu mảng đó không chứa dữ liệu.",
      "Trả về giá trị null vì đây là cách thức mặc định của Node.js để thông báo cho lập trình viên biết rằng quá trình truy vấn cơ sở dữ liệu đã kết thúc mà không có kết quả."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Đặc điểm khác biệt lớn nhất giữa Socket.io và giao thức WebSocket thuần túy (Native WebSocket) là gì?",
    "opts": [
      "Socket.io là một giao thức truyền tải dữ liệu hoàn toàn mới và độc lập, không sử dụng bất kỳ thành phần nào của WebSocket mà thay vào đó sử dụng các tệp tin văn bản thô để trao đổi thông tin.",
      "Socket.io là một thư viện cung cấp các tính năng nâng cao dựa trên WebSocket, bao gồm khả năng tự động kết nối lại và cơ chế dự phòng (fallback) sang HTTP Long-polling nếu môi trường không hỗ trợ WebSocket.",
      "Socket.io bắt buộc người dùng phải cài đặt thêm các trình điều khiển phần cứng chuyên dụng vào máy chủ thì mới có thể thiết lập được kết nối thời gian thực giữa trình duyệt và ứng dụng Node.js.",
      "Socket.io chỉ có khả năng hoạt động trên các máy chủ chạy hệ điều hành Windows và không thể vận hành được trên các nền tảng mã nguồn mở như Linux hay macOS do giới hạn về mặt kiến trúc phần mềm."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Trong Socket.io, phương thức io.emit() thực hiện chức năng gì?",
    "opts": [
      "Phương thức này sẽ gửi thông điệp tới tất cả các máy khách hiện đang kết nối tới máy chủ, bao gồm cả chính máy khách vừa thực hiện việc gửi yêu cầu lên hệ thống tại thời điểm đó.",
      "Phương thức này chỉ gửi dữ liệu tới các máy khách đang sử dụng trình duyệt Google Chrome và tự động bỏ qua các máy khách đang sử dụng các trình duyệt khác để đảm bảo tính đồng nhất về hiển thị.",
      "Phương thức này sẽ thực hiện việc gửi thông điệp tới duy nhất một máy khách được hệ thống lựa chọn ngẫu nhiên nhằm mục đích giảm tải tài nguyên băng thông cho máy chủ trong quá trình truyền tải.",
      "Phương thức này thực hiện việc mã hóa toàn bộ dữ liệu thành các tệp tin hình ảnh để đảm bảo rằng thông tin không bị đánh cắp bởi các tin tặc trong suốt quá trình truyền tải qua mạng internet."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Phương thức socket.broadcast.emit() khác với io.emit() như thế nào?",
    "opts": [
      "Phương thức này chỉ có tác dụng khi ứng dụng được triển khai trên các máy chủ đám mây và hoàn toàn không hoạt động được trên các máy tính cá nhân trong quá trình phát triển dự án cục bộ.",
      "Phương thức này thực hiện việc gửi thông điệp tới tất cả các máy khách đang kết nối ngoại trừ chính máy khách (socket) đã kích hoạt sự kiện đó, giúp tránh việc người gửi nhận lại thông tin của chính mình.",
      "Phương thức này yêu cầu người dùng phải trả phí bản quyền hàng tháng thì mới có thể thực hiện việc gửi tin nhắn tới nhiều người cùng một lúc thay vì chỉ gửi được cho một người duy nhất.",
      "Phương thức này sẽ tự động nén dữ liệu xuống dung lượng thấp nhất để tăng tốc độ truyền tải nhưng bù lại nó sẽ làm giảm chất lượng của các thông tin được gửi đi giữa máy chủ và máy khách."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Khái niệm \"Room\" (Phòng) trong Socket.io được sử dụng để làm gì?",
    "opts": [
      "Room là một thư mục vật lý trên ổ đĩa cứng của máy chủ dùng để lưu trữ toàn bộ lịch sử trò chuyện của người dùng dưới dạng các tệp tin văn bản để phục vụ việc tra cứu dữ liệu sau này.",
      "Room bắt buộc người dùng phải nhập mật khẩu mỗi khi muốn gửi một thông điệp thời gian thực tới máy chủ nhằm mục đích ngăn chặn các cuộc tấn công từ chối dịch vụ (DoS) vào ứng dụng web.",
      "Room là một kênh logic cho phép lập trình viên nhóm một tập hợp các socket lại với nhau để có thể gửi thông điệp tới một nhóm đối tượng cụ thể thay vì gửi cho toàn bộ các máy khách.",
      "Room là một lớp bảo mật đặc biệt dùng để cô lập bộ nhớ RAM của máy chủ, đảm bảo rằng mỗi người dùng sẽ có một vùng không gian tính toán riêng biệt và không thể can thiệp vào dữ liệu của nhau."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Phương thức socket.join('room_name') có đặc điểm hoạt động như thế nào?",
    "opts": [
      "Phương thức này yêu cầu máy chủ phải khởi động lại toàn bộ tiến trình Node.js để có thể tạo ra một phòng mới và cấp quyền truy cập cho máy khách vào bên trong phòng dữ liệu đó.",
      "Phương thức này cho phép một socket tham gia vào một kênh cụ thể, sau đó máy chủ có thể sử dụng io.to('room_name').emit() để gửi tin nhắn tới tất cả thành viên trong kênh đó.",
      "Phương thức này sẽ tự động ngắt kết nối của tất cả các người dùng khác để ưu tiên băng thông cho máy khách vừa tham gia vào phòng, đảm bảo tốc độ truyền tải dữ liệu luôn đạt mức tối đa.",
      "Phương thức này chỉ có thể thực hiện được từ phía máy khách (client-side) và máy chủ không có quyền can thiệp vào việc quản lý các phòng của người dùng do quy định về quyền riêng tư."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "\"Namespace\" (Không gian tên) trong Socket.io giúp ích gì cho các ứng dụng quy mô lớn?",
    "opts": [
      "Namespace cho phép chia nhỏ một ứng dụng Socket.io thành nhiều phần độc lập trên cùng một máy chủ, giúp tách biệt logic xử lý và giảm thiểu sự xung đột giữa các sự kiện khác nhau.",
      "Namespace là một công cụ giúp tự động thay đổi tên của các biến toàn cục trong mã nguồn để các lập trình viên khác không thể đọc hiểu được logic xử lý của ứng dụng nhằm mục đích bảo mật.",
      "Namespace yêu cầu lập trình viên phải sử dụng các máy chủ vật lý khác nhau cho mỗi không gian tên để đảm bảo rằng dữ liệu không bị trộn lẫn trong quá trình truyền tải qua mạng internet.",
      "Namespace là một định dạng tệp tin mới dùng để thay thế hoàn toàn cho định dạng .js truyền thống, giúp cho các đoạn mã lệnh Socket.io có thể chạy nhanh hơn gấp nhiều lần trên trình duyệt."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Cơ chế \"Acknowledgement\" (Xác nhận) trong Socket.io hoạt động như thế nào?",
    "opts": [
      "Lập trình viên có thể truyền một hàm callback làm tham số cuối cùng của phương thức emit; khi phía nhận xử lý xong và gọi hàm này, phía gửi sẽ nhận được thông báo xác nhận.",
      "Máy chủ sẽ liên tục gửi lại thông điệp cho đến khi máy khách phản hồi bằng một yêu cầu HTTP POST để xác nhận rằng dữ liệu đã được ghi xuống ổ đĩa cứng của thiết bị di động thành công.",
      "Hệ thống sẽ tự động in ra một thông báo trên màn hình máy tính của người dùng để yêu cầu họ nhấn vào nút \"Xác nhận\" thì máy chủ mới cho phép tiếp tục gửi các thông điệp tiếp theo.",
      "Cơ chế xác nhận chỉ có tác dụng đối với các tệp tin hình ảnh và video dung lượng lớn, còn đối với các tin nhắn văn bản đơn giản thì Socket.io sẽ mặc định bỏ qua để tiết kiệm tài nguyên."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Sự kiện disconnect trong Socket.io được kích hoạt khi nào?",
    "opts": [
      "Sự kiện này sẽ được hệ thống tự động kích hoạt sau mỗi 5 phút một lần để buộc tất cả người dùng phải thực hiện việc đăng nhập lại nhằm mục đích làm mới các khóa bảo mật của ứng dụng.",
      "Sự kiện này chỉ xảy ra khi máy chủ bị mất điện đột ngột và toàn bộ dữ liệu trong bộ nhớ RAM bị xóa sạch khiến cho các kết nối hiện tại không thể tiếp tục duy trì được nữa.",
      "Sự kiện này được kích hoạt ngay khi lập trình viên thực hiện việc xóa module socket.io ra khỏi thư mục node_modules của dự án trong quá trình máy chủ Node.js đang vận hành thực tế.",
      "Sự kiện này được kích hoạt khi một máy khách ngắt kết nối với máy chủ (ví dụ: đóng trình duyệt, mất mạng hoặc gọi phương thức disconnect), giúp máy chủ thực hiện các tác vụ dọn dẹp."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 3
  },
  {
    "q": "Để tích hợp Socket.io vào một HTTP Server trong Node.js, bạn cần thực hiện bước nào?",
    "opts": [
      "Lập trình viên phải thực hiện việc nén toàn bộ mã nguồn của Socket.io thành một tệp tin hình ảnh rồi nhúng trực tiếp vào thẻ đại diện của trang web để trình duyệt có thể tự động nhận diện.",
      "Lập trình viên cần khởi tạo đối tượng Server từ thư viện socket.io và truyền đối tượng HTTP Server của Node.js vào để Socket.io có thể gắn kết và lắng nghe trên cùng một cổng.",
      "Lập trình viên bắt buộc phải mua một tên miền riêng biệt cho Socket.io vì thư viện này không thể hoạt động chung trên cùng một địa chỉ IP với các dịch vụ web thông thường khác hiện nay.",
      "Lập trình viên chỉ cần cài đặt thư viện bằng lệnh npm và hệ thống sẽ tự động thực hiện việc kết nối tới tất cả các máy chủ web hiện có trên máy tính mà không cần viết thêm mã lệnh nào."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Ưu điểm của việc sử dụng Socket.io so với việc sử dụng AJAX Polling là gì?",
    "opts": [
      "Socket.io giúp tiết kiệm dung lượng ổ đĩa cứng cho máy chủ vì nó không cần phải lưu trữ bất kỳ đoạn mã lệnh nào mà thay vào đó sẽ tải toàn bộ từ các dịch vụ lưu trữ đám mây của nhà phát hành.",
      "Socket.io cho phép giao tiếp hai chiều toàn phần (full-duplex) với độ trễ cực thấp, trong khi AJAX Polling yêu cầu máy khách phải liên tục gửi yêu cầu lên máy chủ để kiểm tra dữ liệu mới.",
      "Socket.io bắt buộc trình duyệt web phải hoạt động ở chế độ toàn màn hình thì mới có thể duy trì được kết nối, từ đó giúp tăng cường sự tập trung của người dùng khi sử dụng ứng dụng web.",
      "AJAX Polling là một công nghệ đã bị cấm hoàn toàn bởi các tổ chức tiêu chuẩn web quốc tế do nó tiêu tốn quá nhiều điện năng của các thiết bị di động khi truy cập vào các trang web thời gian thực."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Xét đoạn mã phía máy chủ sau đây. Nếu người dùng A gửi sự kiện 'chat-msg', trong khi người dùng B và C cũng đang kết nối, kết quả thực tế sẽ như thế nào?",
    "opts": [
      "Toàn bộ các máy khách bao gồm A, B và C đều sẽ nhận được thông điệp 'new-msg' vì phương thức emit mặc định luôn phát sóng tới mọi kết nối hiện có trong không gian tên mặc định của ứng dụng Socket.io.",
      "Chỉ duy nhất máy khách của người dùng A nhận được thông điệp vì phương thức socket.broadcast thực hiện việc phản hồi trực tiếp và riêng tư cho người vừa kích hoạt sự kiện lên máy chủ nhằm xác nhận dữ liệu.",
      "Dữ liệu sẽ được gửi tới tất cả các máy khách đang kết nối bao gồm người dùng B và C, nhưng người dùng A (người gửi) sẽ không nhận được sự kiện 'new-msg' này do cơ chế hoạt động của từ khóa broadcast.",
      "Hệ thống sẽ báo một lỗi thực thi nghiêm trọng vì phương thức broadcast bắt buộc lập trình viên phải truyền vào một tham số nhận dạng phòng (room) cụ thể thì mới có thể thực hiện việc phát tin nhắn."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 2
  },
  {
    "q": "Cho đoạn mã xử lý phòng (room) như sau. Khi một máy khách đầu tiên kết nối vào hệ thống, máy khách đó sẽ nhận được nội dung gì từ máy chủ?\nio.on('connection', (socket) => {\n socket.join('room-1');\n socket.to('room-1').emit('welcome', 'Chào mừng bạn!');\n});",
    "opts": [
      "Máy khách đó sẽ không nhận được bất kỳ thông điệp nào vì phương thức socket.to('room') gửi tin nhắn tới tất cả thành viên trong phòng ngoại trừ chính người gửi, mà lúc này trong phòng chỉ có duy nhất máy khách đó.",
      "Máy khách sẽ nhận được một thông báo lỗi từ hệ thống vì chúng ta không được phép thực hiện lệnh emit ngay sau khi vừa gọi lệnh join mà phải thông qua một hàm callback xử lý bất đồng bộ theo quy định.",
      "Máy khách đó sẽ nhận được chuỗi 'Chào mừng bạn!' ngay lập tức vì nó đã được thêm vào phòng 'room-1' thành công trước khi lệnh phát tin nhắn được thực thi trong hàm xử lý sự kiện connection.",
      "Máy khách sẽ nhận được thông điệp 'Chào mừng bạn!' hai lần vì khi tham gia vào một phòng, Socket.io sẽ tự động kích hoạt một sự kiện chào mặc định cho mọi thành viên mới gia nhập vào kênh dữ liệu đó."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Xét đoạn mã sử dụng cơ chế xác nhận (Acknowledgement) sau. Thứ tự thực thi logic nào dưới đây là chính xác?",
    "opts": [
      "Client phát sự kiện, sau đó Server nhận sự kiện và thực thi hàm callback để gửi chuỗi 'Done' về, cuối cùng Client nhận được phản hồi và thực hiện lệnh in kết quả ra màn hình bảng điều khiển console.",
      "Server sẽ chủ động gọi hàm callback trước để chuẩn bị dữ liệu, sau đó mới chờ đợi Client gửi sự kiện 'get-info' tới để hoàn tất quá trình trao đổi thông tin thời gian thực giữa hai đầu kết nối.",
      "Hàm console.log trên Client sẽ được thực thi ngay lập tức sau lệnh emit mà không cần chờ đợi phản hồi từ Server nhờ vào cơ chế xử lý bất đồng bộ mặc định của môi trường thực thi JavaScript hiện nay.",
      "Lệnh callback trên Server sẽ bị hệ thống báo lỗi vì trong Socket.io, các hàm callback chỉ được phép sử dụng ở phía Client để nhận dữ liệu và không thể được truyền từ Client sang Server dưới dạng tham số."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  },
  {
    "q": "Cho đoạn mã sử dụng Namespace sau đây. Nếu phía máy khách thực hiện kết nối bằng lệnh const socket = io(); (không chỉ định đường dẫn), máy khách có nhận được sự kiện 'hello' không?",
    "opts": [
      "Máy khách sẽ nhận được sự kiện 'hello' bình thường vì tất cả các không gian tên (namespaces) trong Socket.io đều chia sẻ chung một luồng sự kiện và mọi kết nối đều có thể nhận tin từ bất kỳ không gian tên nào.",
      "Máy khách sẽ không nhận được sự kiện 'hello' vì nó đang kết nối tới không gian tên mặc định ('/'), trong khi sự kiện 'hello' chỉ được phát ở không gian tên chuyên biệt là '/admin' với các luồng xử lý độc lập.",
      "Máy chủ sẽ báo lỗi \"Connection Refused\" vì khi đã định nghĩa một không gian tên riêng như '/admin', lập trình viên bắt buộc phải tắt không gian tên mặc định thì ứng dụng mới có thể vận hành ổn định và bảo mật.",
      "Máy khách sẽ nhận được thông điệp 'hello' nhưng nội dung sẽ bị mã hóa thành các ký tự không đọc được vì nó không sử dụng đúng đường dẫn truy cập đã được thiết lập bên phía máy chủ ứng dụng Node.js."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 1
  },
  {
    "q": "Dự đoán kết quả in ra bảng điều khiển khi người dùng A gửi sự kiện 'trigger' tới đoạn mã máy chủ sau (biết có 3 người A, B, C đang kết nối):\nio.on('connection', (socket) => {\n socket.on('trigger', () => {\n  io.emit('action', 'Go');\n });\n});",
    "opts": [
      "Toàn bộ 3 người dùng A, B và C đều sẽ nhận được chuỗi 'Go' vì phương thức io.emit (gọi từ đối tượng server chính) thực hiện việc phát tin tới tất cả các máy khách đang kết nối trong toàn bộ không gian tên.",
      "Chỉ duy nhất người dùng A nhận được chuỗi 'Go' vì lệnh io.emit khi được đặt bên trong một trình xử lý sự kiện socket sẽ tự động bị giới hạn phạm vi chỉ tác động lên chính máy khách đã kích hoạt sự kiện đó.",
      "Chỉ có người dùng B và C nhận được chuỗi 'Go' vì lệnh emit bên trong sự kiện connection luôn mặc định hoạt động theo cơ chế của một bộ phát sóng (broadcast) để tránh việc gửi lặp lại dữ liệu cho người gửi.",
      "Không có ai nhận được tin nhắn và máy chủ sẽ báo lỗi vì lập trình viên không được phép sử dụng đối tượng io bên trong hàm callback của sự kiện connection để tránh gây ra các xung đột về luồng dữ liệu."
    ],
    "chapter": "Chương 4&5: Web Module và Socket.io",
    "ans": 0
  }
];

let cur = 0, score = 0, answered = false;
let userAnswers = [];

function renderQuestion() {
    const q = questions[cur];
    document.getElementById('progress').textContent = `Câu ${cur+1} / ${questions.length}`;
    document.getElementById('question').textContent = q.q;

    const opts = document.getElementById('options');
    opts.innerHTML = '';
    q.opts.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'opt';
        btn.textContent = `${String.fromCharCode(65+i)}. ${opt}`;
        btn.onclick = () => answer(i);
        opts.appendChild(btn);
    });

    document.getElementById('next-btn').style.display = 'none';
    answered = false;
}

function answer(idx) {
    if (answered) return;
    answered = true;
    userAnswers[cur] = idx;

    const q = questions[cur];
    const btns = document.querySelectorAll('.opt');
    btns.forEach(b => b.disabled = true);
    btns[q.ans].classList.add('correct');
    if (idx !== q.ans) btns[idx].classList.add('wrong');
    else score++;

    const nb = document.getElementById('next-btn');
    nb.style.display = 'inline-block';
    nb.textContent = cur === questions.length - 1 ? 'Xem kết quả →' : 'Câu tiếp →';
}

function nextQuestion() {
    cur++;
    if (cur >= questions.length) {
        showResult();
        return;
    }
    renderQuestion();
}

function showResult() {
    document.querySelector('.card').style.display = 'none';

    const pct = Math.round(score / questions.length * 100);
    const msg = pct >= 80 ? '🎉 Xuất sắc!' : pct >= 60 ? '👍 Khá tốt!' : '📚 Cần ôn thêm!';

    let reviewHTML = '';
    questions.forEach((q, i) => {
        const userAns   = userAnswers[i];
        const correct   = q.ans;
        const isCorrect = userAns === correct;

        reviewHTML += `
            <div class="review-item ${isCorrect ? 'review-correct' : 'review-wrong'}">
                <p class="review-num">Câu ${i+1}: ${isCorrect ? '✅ Đúng' : '❌ Sai'}</p>
                <p class="review-q">${q.q}</p>
                <p class="review-ans correct-ans">
                    ✔ Đáp án đúng: ${String.fromCharCode(65+correct)}. ${q.opts[correct]}
                </p>
                ${!isCorrect ? `
                <p class="review-ans wrong-ans">
                    ✘ Bạn chọn: ${String.fromCharCode(65+userAns)}. ${q.opts[userAns]}
                </p>` : ''}
            </div>
        `;
    });

    document.getElementById('score').innerHTML = `
        <div class="result-box">
            <p class="result-title">Kết quả: ${score}/${questions.length} (${pct}%)</p>
            <p class="result-msg">${msg}</p>
            <button class="next-btn" style="display:inline-block;margin-bottom:24px" onclick="location.reload()">Làm lại</button>
        </div>
        <h2 style="font-size:16px;margin-bottom:12px;text-align:left">Chi tiết từng câu:</h2>
        ${reviewHTML}
    `;
}

renderQuestion();