import React from 'react';

// Khai báo hàm 1: Nhận selectedRoom làm đối số
const handleContinue1 = (selectedRoom) => {
  console.log("Phòng được chọn:", selectedRoom);
};

// Khai báo hàm 2: Hủy tổ chức selectedRoom từ đối số là một đối tượng
const handleContinue2 = ({ selectedRoom }) => {
  console.log("Phòng được chọn:", selectedRoom);
};

const RoomSelectionComponent = () => {
  // Giả lập dữ liệu về các phòng
  const rooms = [
    { id: 1, name: "Phòng 1" },
    { id: 2, name: "Phòng 2" },
    { id: 3, name: "Phòng 3" },
  ];

  return (
    <div>
      <h2>Chọn phòng:</h2>
      {/* Sử dụng map để render các nút cho mỗi phòng */}
      {/* Nút 1: Gọi handleContinue1 với tên phòng làm đối số */}
      {rooms.map(room => (
        <button key={room.id} onClick={() => handleContinue1(room.name)}>
          {room.name}
        </button>
      ))}

      {/* Nút 2: Gọi handleContinue2 với một đối tượng chứa tên phòng */}
      {rooms.map(room => (
        <button key={room.id} onClick={() => handleContinue2({ selectedRoom: room.name })}>
          {room.name}
        </button>
      ))}
    </div>
  );
};

export default RoomSelectionComponent;
