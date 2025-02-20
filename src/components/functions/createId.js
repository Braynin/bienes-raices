export default function createId(name) {
  return name
    .trim()
    .toLowerCase()
    .normalize("NFD") // Descompone los caracteres con tildes
    .replace(/[\u0300-\u036f]/g, "") // Elimina los diacríticos
    .replace(/\s+/g, "-"); // Reemplaza los espacios por guiones
}
