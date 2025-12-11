import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import React from "react";


function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (value: any) => {
  if (value instanceof Date) {
    setSelectedDate(value);
  }
};

const todosByDate: Record<string, string[]> = {
  "2025-12-11": ["宿題をやる", "おもちゃを片付ける"],
  "2025-12-12": ["絵を描く", "お手伝いをする"],
};


const formattedDate = selectedDate.toISOString().split("T")[0];
const todaysTodos = todosByDate[formattedDate] || [];

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      
      {/* ダッシュボード */}
      <section style={{ marginBottom: "20px", padding: "15px", background: "#f0f8ff", borderRadius: "8px" }}>
        <h2>今日のダッシュボード</h2>
        <p>今日のタスク数：0件</p>
        <p>昨日の達成：0件</p>
      </section>

      {/* カレンダー */}
      <section style={{ marginBottom: "20px" }}>
        <h2>カレンダー</h2>
        <Calendar onChange={setSelectedDate} value={selectedDate} />
      </section>

      {/* 今日のTODOリスト */}
<section>
  <h2>今日のTODO</h2>

  {todaysTodos.length === 0 ? (
    <p>まだ何もありません</p>
  ) : (
    <ul>
{todaysTodos.map((todo: string, index: number) => (
  <li key={index}>{todo}</li>
))}
<Calendar onChange={handleDateChange} value={selectedDate} />

    </ul>
  )}
</section>
    </div>
  );
}

export default App;