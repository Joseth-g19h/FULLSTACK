import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const FormatData = (isoString) => {
  const date = new Date(isoString);
  return format(date, "dd 'de' MMMM 'de' yyyy", { locale: es });
}

export default FormatData;
