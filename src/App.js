import React, { useState } from 'react';

const breakfastItems = [
  { id: 1, name: "紅茶", price: 15, isDrink: true },
  { id: 2, name: "培根起司可頌", price: 70, isDrink: false },
  { id: 3, name: "茉莉綠", price: 15, isDrink: true },
  { id: 4, name: "培根薯餅波羅堡", price: 75, isDrink: false },
  { id: 5, name: "嫩煎雞腿巧巴達", price: 90, isDrink: false },
  { id: 6, name: "豆漿", price: 20, isDrink: true },
  { id: 7, name: "起司雙雞波羅堡", price: 85, isDrink: false },
  { id: 8, name: "榛果奶茶", price: 25, isDrink: true },
  { id: 9, name: "香醇奶茶", price: 25, isDrink: true },
  { id: 10, name: "醬燒炒麵", price: 65, isDrink: false },
  { id: 11, name: "花生炸湯圓可頌", price: 79, isDrink: false },
  { id: 12, name: "鮮奶茶", price: 15, isDrink: true },
  { id: 13, name: "黑糖鮮奶茶", price: 40, isDrink: true },
  { id: 14, name: "巧克力培根煎蛋可頌", price: 70, isDrink: false },
  { id: 15, name: "橙香綠", price: 35, isDrink: true },
  { id: 16, name: "炸雞腿蔥抓餅", price: 70, isDrink: false },
  { id: 17, name: "橙香紅茶", price: 35, isDrink: true },
  { id: 18, name: "豆漿紅茶", price: 20, isDrink: true },
  { id: 19, name: "腐皮蛋餅", price: 60, isDrink: false },
  { id: 20, name: "花生卡拉雞波羅堡", price: 70, isDrink: false },
  { id: 21, name: "海苔肉鬆可頌", price: 80, isDrink: false },
  { id: 22, name: "蔬果巧巴達", price: 70, isDrink: false },
  { id: 23, name: "火腿蛋起司巧巴達", price: 70, isDrink: false },
  { id: 24, name: "卡拉雞捲餅", price: 60, isDrink: false },
  { id: 25, name: "韓式卡拉雞捲餅", price: 75, isDrink: false },
  { id: 26, name: "卡拉雞乳酪餅", price: 45, isDrink: false },
  { id: 27, name: "火腿蛋起司乳酪餅", price: 35, isDrink: false },
  { id: 28, name: "煎雞腿乳酪餅", price: 20, isDrink: false },
  { id: 29, name: "燻雞焗烤厚片", price: 60, isDrink: false },
  { id: 30, name: "海陸橙堡", price: 85, isDrink: false },
  { id: 31, name: "活力堡", price: 35, isDrink: false },
  { id: 32, name: "麥香雞漢堡", price: 40, isDrink: false },
  { id: 33, name: "黃金雞排漢堡", price: 60, isDrink: false },
  { id: 34, name: "香檸雞柳漢堡", price: 55, isDrink: false },
  { id: 35, name: "薯條", price: 40, isDrink: false },
  { id: 36, name: "雞塊", price: 40, isDrink: false },
  { id: 37, name: "香檸雞柳", price: 50, isDrink: false },
  { id: 38, name: "薯餅", price: 35, isDrink: false },
  { id: 39, name: "橙堡蛋餅", price: 55, isDrink: false },
  { id: 40, name: "豬排蛋餅", price: 40, isDrink: false },
  { id: 41, name: "熱狗蛋餅", price: 40, isDrink: false },
  { id: 42, name: "培根蛋餅", price: 35, isDrink: false },
  { id: 43, name: "芝心蛋餅", price: 40, isDrink: false },
  { id: 44, name: "苜蓿芽蛋餅", price: 35, isDrink: false },
  { id: 45, name: "玉米蛋餅", price: 35, isDrink: false },
  { id: 46, name: "火腿蛋餅", price: 35, isDrink: false },
  { id: 47, name: "薯餅蛋餅", price: 40, isDrink: false },
  { id: 48, name: "泡菜蛋餅", price: 45, isDrink: false },
  { id: 49, name: "卡拉蛋餅", price: 60, isDrink: false },
  { id: 50, name: "玉米蛋吐司", price: 30, isDrink: false },
  { id: 51, name: "厚片", price: 25, isDrink: false },
  { id: 52, name: "果醬吐司", price: 20, isDrink: false },
  { id: 53, name: "蔥抓餅", price: 30, isDrink: false },
  { id: 54, name: "韓式蔥抓餅", price: 45, isDrink: false },
  { id: 55, name: "炸蘿蔔糕", price: 55, isDrink: false }
];

function App() {
  const [mustInclude, setMustInclude] = useState([]);
  const [includeDrink, setIncludeDrink] = useState(true);
  const [totalCount, setTotalCount] = useState(3);
  const [priceLimit, setPriceLimit] = useState(85);
  const [result, setResult] = useState([]);

  const toggleMustInclude = (id) => {
    setMustInclude((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleGenerate = () => {
    const maxTries = 30;
    const requiredItems = mustInclude.map(id =>
      breakfastItems.find(item => item.id === id)
    );

    for (let i = 0; i < maxTries; i++) {
      let chosen = [...requiredItems];
      let usedIds = new Set(chosen.map(item => item.id));

      if (includeDrink && !chosen.some(item => item.isDrink)) {
        const drinks = breakfastItems.filter(item => item.isDrink && !usedIds.has(item.id));
        if (drinks.length === 0) continue;
        const drink = drinks[Math.floor(Math.random() * drinks.length)];
        chosen.push(drink);
        usedIds.add(drink.id);
      }

      const remainingItems = breakfastItems.filter(item => !usedIds.has(item.id));
      while (chosen.length < totalCount && remainingItems.length > 0) {
        const randIndex = Math.floor(Math.random() * remainingItems.length);
        const item = remainingItems.splice(randIndex, 1)[0];
        chosen.push(item);
        usedIds.add(item.id);
      }

      const totalPrice = chosen.reduce((sum, item) => sum + item.price, 0);
      if (totalPrice <= priceLimit && chosen.length === totalCount) {
        setResult(chosen);
        return;
      }
    }

    alert("找不到符合條件的組合，請放寬條件再試一次！");
    setResult([]);
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
      <h1>🍱 早餐組合 App</h1>

      <h3>✅ 必選品項</h3>
      {breakfastItems.map((item) => (
        <div key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={mustInclude.includes(item.id)}
              onChange={() => toggleMustInclude(item.id)}
            />
            {item.name}（${item.price}）
          </label>
        </div>
      ))}

      <hr />

      <label>
        🥤 是否需要飲料：
        <input
          type="checkbox"
          checked={includeDrink}
          onChange={(e) => setIncludeDrink(e.target.checked)}
          style={{ marginLeft: 10 }}
        />
      </label>

      <div>
        <label>
          🍔 總品項數量：{totalCount}
          <input
            type="range"
            min="1"
            max="6"
            value={totalCount}
            onChange={(e) => setTotalCount(parseInt(e.target.value))}
            style={{ width: "100%" }}
          />
        </label>
      </div>

      <div>
        <label>
          💰 價格上限：
          <input
            type="number"
            value={priceLimit}
            onChange={(e) => setPriceLimit(Number(e.target.value))}
            style={{ marginLeft: 10 }}
          />
          元
        </label>
      </div>

      <button
        onClick={handleGenerate}
        style={{
          marginTop: 20,
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        🎲 幫我決定！
      </button>

      <hr />

      <h3>✨ 結果</h3>
      {result.length === 0 ? (
        <p>請點上方按鈕來產生早餐組合</p>
      ) : (
        <ul>
          {result.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
