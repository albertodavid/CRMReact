import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alert from "./Alert";

const FormUser = () => {
  const nuevoClienteSchema = Yup.object().shape({
    nombre: Yup.string()
      .min(3, "El nombre es muy corto")
      .max(20, "El nombre es muy largo")
      .required("El Nombre del cliente es obligatorio"),
    empresa: Yup.string()
      .min(3, "El nombre es muy corto")
      .max(20, "El nombre es muy largo")
      .required("El Nombre de la empresa es obligatorio"),
    web: Yup.string().url().required("El Nombre de la empresa es obligatorio"),
    mail: Yup.string()
      .email("Email no valido")
      .required("El email es obligatorio"),
    tel: Yup.number()
      .positive("Número no válido")
      .integer("Número no válido")
      .typeError('Número no válido'),
  });

  const handleSubmit = (valores) => {
    console.log(valores);
  };

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold teext-xl uppercase text-center">
        Agregar Cliente
      </h1>

      <Formik
        initialValues={{
          nombre: "",
          empresa: "",
          web: "",
          mail: "",
          tel: "",
          notas: "",
        }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={nuevoClienteSchema}
      >
        {({ errors }) => {
          return (
            <Form className="mt-10">
              <div>
                <label className="text-gray-900" htmlFor="nombre">
                  Nombre
                </label>
                <Field
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-100"
                  id="nombre"
                  placeholder="Nombre Cliente"
                  name="nombre"
                />
                {errors.nombre ? <Alert>{errors.nombre}</Alert> : null}
              </div>

              <div className="mt-5">
                <label className="text-gray-900" htmlFor="empresa">
                  Empresa
                </label>
                <Field
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-100"
                  id="empresa"
                  placeholder="Empresa"
                  name="empresa"
                />
                {errors.empresa ? <Alert>{errors.empresa}</Alert> : null}
              </div>

              <div className="mt-5">
                <label className="text-gray-900" htmlFor="web">
                  Web
                </label>
                <Field
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-100"
                  id="web"
                  placeholder="Web"
                  name="web"
                />
                {errors.web ? <Alert>{errors.web}</Alert> : null}
              </div>

              <div className="mt-5">
                <label className="text-gray-900" htmlFor="mail">
                  Mail
                </label>
                <Field
                  type="email"
                  className="mt-2 block w-full p-3 bg-gray-100"
                  id="mail"
                  placeholder="Mail"
                  name="mail"
                />
                {errors.mail ? <Alert>{errors.mail}</Alert> : null}
              </div>

              <div className="mt-5">
                <label className="text-gray-900" htmlFor="telefono">
                  Telefono
                </label>
                <Field
                  type="tel"
                  className="mt-2 block w-full p-3 bg-gray-100"
                  id="telefono"
                  placeholder="Número de Teléfono"
                  name="tel"
                />
                {errors.tel ? <Alert>{errors.tel}</Alert> : null}
              </div>

              <div className="mt-5">
                <label className="text-gray-900" htmlFor="notas">
                  Notas
                </label>
                <Field
                  as="textarea"
                  type="tel"
                  className="mt-2 block w-full p-3 bg-gray-100 h-40"
                  id="notas"
                  placeholder="Notas del cliente"
                  name="notas"
                />
              </div>

              <input
                type="submit"
                value="Agregar Cliente"
                className="mt-5 w-full bg-blue-900 p-3 text-white uppercase font-bold"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormUser;
