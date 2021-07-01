
            /* VALIDATE FORM
             * 1. Username không được trống, tối thiểu 5 ký tự, ko chứa ký tự đặc biệt
             * 2. Mật khẩu không được trống, tối thiểu 8 ký tự
             * 3. Mật khẩu nhập lại phải trùng
             * 4. Phone phải là những con số và 10 ký tự
             * 5. Email phải đúng định dạng, va bat buoc nhap
             */

            // Lấy giá trị của một input
            function getValue(id){
                return document.getElementById(id).value.trim();
            }

            // Hiển thị lỗi
            function showError(key, mess){
                document.getElementById(key + '_error').innerHTML = mess;
            }

            function validate()
            {
                var flag = true;

                // 1 username
                var username = getValue('username');
                if (username == '' || username.length < 5 || !/^[a-zA-Z0-9]+$/.test(username)){
                    flag = false;
                    showError('username', 'Vui lòng kiểm tra lại Username');
                }

                // 2. password
                var password = getValue('password');
                var repassword = getValue('repassword');
                if (password == '' || password.length < 8 || password != repassword){
                    flag = false;
                    showError('password', 'Vui lòng kiểm tra lại Password');
                }

                // 3. Phone
                var phone = getValue('phone');
                if (phone != '' &&  !/^[0-9]{10}$/.test(phone)){
                    flag = false;
                    showError('phone', 'Vui lòng kiểm tra lại Phone');
                }

                // 4. Email
                var email = getValue('email');
                var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                if (!mailformat.test(email)){
                    flag = false;

                    showError('phone', 'Vui lòng kiểm tra lại Email');
                }

                return flag;
            }