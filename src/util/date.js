export const getStringDate = (date) => {
  // toISOString() : Date객체의 메서드 YYYY-MM-DDTHH ... 으로 반환 하므로 slice(0,10)을 해주면 YYYY-MM-DD까지 반환 가능
  return date.toISOString().slice(0, 10);
};
