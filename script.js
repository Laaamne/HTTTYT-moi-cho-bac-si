// Biến toàn cục để lưu thông tin chỉnh sửa
let patientProfile = {
    id: "12345", // Thêm trường ID bệnh nhân
    name: "Nguyễn Văn A",
    dob: "1980-01-01",
    gender: "Nam",
    address: "123 Đường ABC, TP.HCM"
};

let patientCondition = {
    condition: "Viêm phổi",
    medicine: "Amoxicillin",
    allergies: "Không có"
};

let patientAppointment = {
    date: "2024-10-15"
};

// Xử lý đăng nhập
document.getElementById("login-btn").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1") {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("main-container").style.display = "block";
    } else {
        document.getElementById("error-msg").textContent = "Tài khoản hoặc mật khẩu không đúng!";
    }
});

// Hiển thị và chỉnh sửa Hồ sơ bệnh nhân
document.getElementById("profile-link").addEventListener("click", function() {
    document.getElementById("content").innerHTML = `
        <h2>Hồ sơ bệnh nhân</h2>
        <label>ID bệnh nhân: </label><input type="text" id="id" value="${patientProfile.id}"><br>
        <label>Họ và tên: </label><input type="text" id="name" value="${patientProfile.name}"><br>
        <label>Ngày sinh: </label><input type="date" id="dob" value="${patientProfile.dob}"><br>
        <label>Giới tính: </label><input type="text" id="gender" value="${patientProfile.gender}"><br>
        <label>Địa chỉ: </label><input type="text" id="address" value="${patientProfile.address}"><br>
        <button id="save-profile">Lưu</button>
    `;

    // Xử lý lưu hồ sơ bệnh nhân
    document.getElementById("save-profile").addEventListener("click", function() {
        patientProfile.id = document.getElementById("id").value; // Lưu ID bệnh nhân
        patientProfile.name = document.getElementById("name").value;
        patientProfile.dob = document.getElementById("dob").value;
        patientProfile.gender = document.getElementById("gender").value;
        patientProfile.address = document.getElementById("address").value;
        alert("Thông tin hồ sơ đã được lưu!");

        // Cập nhật lại hiển thị với thông tin mới
        document.getElementById("content").innerHTML = `
            <h2>Hồ sơ bệnh nhân</h2>
            <p>ID bệnh nhân: ${patientProfile.id}</p>
            <p>Họ và tên: ${patientProfile.name}</p>
            <p>Ngày sinh: ${patientProfile.dob}</p>
            <p>Giới tính: ${patientProfile.gender}</p>
            <p>Địa chỉ: ${patientProfile.address}</p>
        `;
    });
});

// Hiển thị và chỉnh sửa Bệnh lý của bệnh nhân
document.getElementById("conditions-link").addEventListener("click", function() {
    document.getElementById("content").innerHTML = `
        <h2>Bệnh lý của bệnh nhân</h2>
        <label>Tên bệnh: </label><input type="text" id="condition" value="${patientCondition.condition}"><br>
        <label>Tên thuốc: </label><input type="text" id="medicine" value="${patientCondition.medicine}"><br>
        <label>Tiền sử dị ứng: </label><input type="text" id="allergies" value="${patientCondition.allergies}"><br>
        <button id="save-condition">Lưu</button>
    `;

    // Xử lý lưu bệnh lý của bệnh nhân
    document.getElementById("save-condition").addEventListener("click", function() {
        patientCondition.condition = document.getElementById("condition").value;
        patientCondition.medicine = document.getElementById("medicine").value;
        patientCondition.allergies = document.getElementById("allergies").value;
        alert("Thông tin bệnh lý đã được lưu!");

        // Cập nhật lại hiển thị với thông tin mới
        document.getElementById("content").innerHTML = `
            <h2>Bệnh lý của bệnh nhân</h2>
            <p>Tên bệnh: ${patientCondition.condition}</p>
            <p>Tên thuốc: ${patientCondition.medicine}</p>
            <p>Tiền sử dị ứng: ${patientCondition.allergies}</p>
        `;
    });
});

// Hiển thị và chỉnh sửa Lịch khám
document.getElementById("appointments-link").addEventListener("click", function() {
    document.getElementById("content").innerHTML = `
        <h2>Lịch khám</h2>
        <label>Ngày hẹn khám: </label><input type="date" id="appointment-date" value="${patientAppointment.date}"><br>
        <button id="save-appointment">Lưu</button>
    `;

    // Xử lý lưu lịch khám
    document.getElementById("save-appointment").addEventListener("click", function() {
        patientAppointment.date = document.getElementById("appointment-date").value;
        alert("Lịch hẹn khám đã được lưu!");

        // Cập nhật lại hiển thị với thông tin mới
        document.getElementById("content").innerHTML = `
            <h2>Lịch khám</h2>
            <p>Ngày hẹn khám: ${patientAppointment.date}</p>
        `;
    });
});
