"use strict";

(async function () {
  const response = fetch("https://reqres.in/api/users?per_page=12")
    .then((response) => response.json())
    .then((data) => data.data);
  const dataBase = await response;
  console.log("1. Получение всех данных с сервера \n", dataBase, "\n");

  const lastNames = dataBase.map((item) => item.last_name);
  console.log("2. Получение только фамилий \n", lastNames, "\n");

  const filteredItems = dataBase.filter((item) => item.last_name[0] === "F");
  console.log(
    "3. Получение всех данных пользователей, фамилии которых начинаются на F \n",
    filteredItems,
    "\n"
  );

  const nameSurname = dataBase.reduce((prev, current) => {
    const temp = current.first_name + " " + current.last_name + ", ";
    return prev + temp;
  }, "");
  console.log(
    "4. Наша база содержит данные следующих пользователей: \n",
    nameSurname,
    "\n"
  );

  const objectKeys = Object.keys(dataBase[0]);
  console.log(
    "5. Получаем названия всех ключей в обьекте пользователя \n",
    objectKeys,
    "\n"
  );
})();
