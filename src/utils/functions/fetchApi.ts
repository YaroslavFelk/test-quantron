export async function fetchApi(url: string) {
  try {
    const response = await fetch(url);
    const json: any = await response.json();
    if (!json.items || !json.items.length) {
      sendErrorCode('посты не найдены')
    }
    return json
  } catch (error) {
    sendErrorCode(error)
  }
}

function sendErrorCode(error: string) {
  console.log('Ошибка: ' + error)
}
