export const formatPhoneNumber = (phone) => {
  const cleaned = phone.replace(/\D/g, ''); // Remove caracteres não numéricos
  const match = cleaned.match(/^(\d{2})(\d{2})(\d{5})(\d{4})$/);

  if (match) {
    return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}`;
  }

  return phone; // Retorna o número original se não corresponder ao formato esperado
};
