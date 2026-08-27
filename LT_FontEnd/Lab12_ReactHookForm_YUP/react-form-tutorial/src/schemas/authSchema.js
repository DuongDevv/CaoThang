import * as yup from 'yup';

export const authSchema = yup.object({
    fullName: yup                                                                                                                                                                                                
       .string()                                                                                                                                                                                                  
       .required("Vui lòng nhập họ và tên")                                                                                                                                                                       
       .min(3, "Họ và tên phải có ít nhất 3 ký tự")                                                                                                                                                               
       .max(50, "Họ và tên không được vượt quá 50 ký tự"),                                                                                                                                                        
                                                                                                                                                                                                                  
    email: yup                                                                                                                                                                                                   
       .string()                                                                                                                                                                                                  
       .required("Vui lòng nhập email")                                                                                                                                                                           
       .email("Email không đúng định dạng (vd: a@gmail.com)"),                                                                                                                                                    
                                                                                                                                                                                                                  
    password: yup                                                                                                                                                                                                
       .string()                                                                                                                                                                                                  
       .required("Vui lòng nhập mật khẩu")                                                                                                                                                                        
       .min(6, "Mật khẩu phải có ít nhất 6 ký tự"),                                                                                                                                                               
                                                                                                                                                                                                                  
    confirmPassword: yup                                                                                                                                                                                         
       .string()                                                                                                                                                                                                  
       .required("Vui lòng xác nhận lại mật khẩu")                                                                                                                                                                
       .oneOf([yup.ref('password')], "Mật khẩu xác nhận không khớp")                                                                                                                                              
})