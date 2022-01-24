export default {
  install(Vue, options) {
    Vue.prototype.$constantes = Object.freeze({
      interfaz: {
        maxHeightTable: 545,
        MESSAGE_SUCCESS_CREATE: "Registro agregado con éxito",
        MESSAGE_SUCCESS_UPDATE: "Registro modificado con éxito",
        MESSAGE_SUCCESS_DELETE: "Registro eliminado con éxito",
        MESSAGE_SUCCESS_SEND: "Enviado con éxito",
        MESSAGE_SUCCESS_SEND_SMS: "Mensaje enviado con éxito",
        MESSAGE_SUCCESS_SEND_MARKETING: "Campaña enviada con éxito",
      },
      reglas: {
        base: {
          required: (value) => !!value || "Este campo es necesario.",
          isNumberValid: (value) =>
            /^-?\d*\.?\d+$/.test(value) ||
            "El campo debe tener sólo números válidos",
          isNumberPositive: (value) =>
            /^(\.)?\d+(\.\d*)?$/.test(value) ||
            "El campo debe tener sólo números positivos",
          isNumberIntPositive: (value) =>
            /^(\.)?\d+()?$/.test(value) ||
            "El campo debe tener sólo números positivos enteros",
          isEmailValid: (value) =>
            /.+@.+\..+/.test(value) ||
            "Formato de correo electrónico incorrecto",
          isNumberAccountValid: (value) =>
            /^\d{4,19}[0-9]+$/.test(value) ||
            "El número de cuenta debe tener un máximo de 20 dígitos numéricos",
          isCLABEValid: (value) =>
            /^\d{18}$/.test(value) ||
            "La CLABE debe contener 18 dígitos numéricos",
          isRFCValid: (value) =>
            /^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))([A-Z\d]{3})?$/.test(
              value
            ) || "Formato de RFC incorrecto",
          isCURPValid: (value) =>
            /^([A-Z]{4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM](AS|BC|BS|CC|CL|CM|CS|CH|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[A-Z]{3}[0-9A-Z]\d)$/.test(
              value
            ) || "Formato de CURP incorrecto",
          isURLValid: (value) =>
            /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/.test(
              value
            ) || "Formato de dirección/URL incorrecta",
          isCodeZipValid: (value) =>
            /^(\.)?\d{5}$/.test(value) ||
            "El campo debe de tener 5 dígitos numéricos enteros",
        },
      },
      masks: {
        phone: "(###) ###-####",
      },
      util: {
        convertions: Convertion,
        toastSuccess: function (title) {
          return Vue.prototype.$swal({
            //https://sweetalert2.github.io/
            icon: "success",
            title:
              "<p style='color:white' class='px14'>" + title || null + "</p>",
            position: "top-end",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 6000,
            toast: true,
            background: "#43A047",
            iconColor: "white",
            showClass: {
              popup: "animate__animated animate__slideInRight",
            },
            hideClass: {
              popup: "animate__animated animate__slideOutDown",
            },
          });
        },
        toastError: function (title) {
          return Vue.prototype.$swal({
            //https://sweetalert2.github.io/
            icon: "error",
            title:
              "<p style='color:white' class='px14'>" + title || null + "</p>",
            position: "top-end",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 6000,
            toast: true,
            background: "#D50000",
            iconColor: "white",
            showClass: {
              popup: "animate__animated animate__slideInRight",
            },
            hideClass: {
              popup: "animate__animated animate__slideOutDown",
            },
          });
        },
      },
    });
  },
};

class Convertion {
  static fromISOToRegularDateFormat(date) {
    if (!date || date == undefined) return "";

    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  }
  static fromRegularToISODateFormat(date) {
    if (!date || date == undefined) return "";

    const [day, month, year] = date.split("/");
    return `${year}-${month}-${day}`;
  }
  static fromISOToRegularDateTimeFormat(datetime) {
    if (!datetime || datetime == undefined) return "";

    const [date, time] = datetime.split(" ");
    return `${this.fromISOToRegularDateFormat(date)} ${time}`;
  }
  static fromNumberToMoneyFormat(number) {
    return new Intl.NumberFormat("en-Latn-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(number);
  }
}
