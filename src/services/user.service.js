import { ConflictException } from "../tool/errors";


export const findUserById = async (userId) => {
    const query = `
      SELECT * FROM users
      WHERE id = $1;
    `;
  
    try {
      const result = await pool.query(query, [userId]);
      return result.rows[0]; // Assuming the ID is unique, we expect at most one row.
    } catch (error) {
      console.error("Error while finding user by ID:", error);
      throw error;
    }
  };
  export const findUserByEmail = async (userEmail) => {
    const query = `
      SELECT * FROM users
      WHERE email= $1;
    `;
  
    try {
      const result = await pool.query(query, [userEmail]);
      return result.rows[0]; // Assuming the ID is unique, we expect at most one row.
    } catch (error) {
      console.error("Error while finding user by ID:", error);
      throw error;
    }
  };


export const createUser = async (payload) => {
   const user = await findUserByEmail(payload.email)

   if (user) return ConflictException("user already exist ")
   const hashedPassword = bcrypt.hashSync(userPayload.password, Number(process.env.AUTH_SALT_AMOUNT));
   payload.password = hashedPassword;

   const insertQuery = `
    INSERT INTO users (firstName, lastName, balance, email, password, userType, isAdmin)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;
  `;

  const values = [
    payload.firstName,
    payload.lastName,
    payload.balance,
    payload.email,
    payload.password,
    payload.userType,
    payload.isAdmin,
  ];
  try {
    const result = await pool.query(insertQuery, values);
    return result.rows[0]; // Return the inserted user record
  } catch (error) {
    console.error('Error inserting user:', error);
    throw error;
  }

}

