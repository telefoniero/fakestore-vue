export async function getAll() {
  const products = await fetch('./products.json')
  return products
}