import Role from "../models/role.js";
//import Usuario from "../models/usuario.js";
import { Categoria , Producto, Usuario} from "../models/index.js";

const esRoleValido = async (rol = "") => {
  // Se le asigna el valor "" para que en caso que no venga rol choque con la siguiente validacion
  const existeRol = await Role.findOne({ rol });
  if (!existeRol) {
    throw new Error(`El rol ${rol} no existe en la BD`);
  }
};

const esMailValido = async (correo = "") => {
  const existeMail = await Usuario.findOne({ correo });
  if (existeMail) {
    throw new Error(`El correo ${correo} ya se encuentra registrado`);
  }
};

const existeUsuarioPorID = async (id = "") => {
  const existeUsuario = await Usuario.findById(id);
  if (!existeUsuario) {
    throw new Error(`El id ${id} no existe en la BD`);
  }
};


/**
 * Vamos a validar aca abajo que exista una categoria segun el id recibido
 */
const existeCategoriaPorId = async (id = "") => {
  const existeCategoria = await Categoria.findById(id);
  if (!existeCategoria) {
    throw new Error(`El id ${id} no existe en la BD`);
  }
};

/**
 * Aca vamos a validar que esxita un producto con el id recibido
 */
const existeProductoPorId = async (id = "") => {
  // Buscamos el id en la BD y chequeamos que no exista
  const existeProducto = await Producto.findById(id);
  if (!existeProducto) {
    throw new Error(`El id ${id} no existe en la BD`);
  }
};


export { esRoleValido, esMailValido, existeUsuarioPorID, existeCategoriaPorId, existeProductoPorId };
