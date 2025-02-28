import styles from './Table.module.css';
import { formatPhoneNumber } from '../../utils/formatPhoneNumber';
import { FaCircle } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa6';

const users = [
  {
    id: 1,
    name: 'João',
    job: 'Back-end',
    admission_date: '2019-12-02T00:00:00.000Z',
    phone: '5551234567890',
    image:
      'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg',
  },
  {
    id: 2,
    name: 'Roberto',
    job: 'Front-end',
    admission_date: '2020-03-12T00:00:00.000Z',
    phone: '5550321654789',
    image:
      'https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png',
  },
  {
    id: 3,
    name: 'Maria',
    job: 'Front-end',
    admission_date: '2020-03-15T00:00:00.000Z',
    phone: '5557894561230',
    image:
      'https://www.clipartmax.com/png/middle/277-2772117_user-profile-avatar-woman-icon-avatar-png-profile-icon.png',
  },
  {
    id: 4,
    name: 'Cleber',
    job: 'Back-end',
    admission_date: '2020-06-01T00:00:00.000Z',
    phone: '5557410258963',
    image:
      'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg',
  },
  {
    id: 5,
    name: 'Giovana',
    job: 'Designer',
    admission_date: '2020-06-20T00:00:00.000Z',
    phone: '5553698520147',
    image:
      'https://www.clipartmax.com/png/middle/277-2772117_user-profile-avatar-woman-icon-avatar-png-profile-icon.png',
  },
  {
    id: 6,
    name: 'Mario',
    job: 'Front-end',
    admission_date: '2020-10-01T00:00:00.000Z',
    phone: '5551234567890',
    image:
      'https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png',
  },
  {
    id: 7,
    name: 'Gabriel',
    job: 'Back-end',
    admission_date: '2021-01-01T00:00:00.000Z',
    phone: '5551234567890',
    image:
      'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg',
  },
  {
    id: 8,
    name: 'Carla',
    job: 'Back-end',
    admission_date: '2021-03-01T00:00:00.000Z',
    phone: '5551234567890',
    image:
      'https://www.clipartmax.com/png/middle/277-2772117_user-profile-avatar-woman-icon-avatar-png-profile-icon.png',
  },
  {
    id: 10,
    name: 'Fernanda',
    job: 'Front-end',
    admission_date: '2021-05-01T00:00:00.000Z',
    phone: '5551234567890',
    image:
      'https://www.clipartmax.com/png/middle/277-2772117_user-profile-avatar-woman-icon-avatar-png-profile-icon.png',
  },
];

const Table = () => {
  return (
    <div className="container">
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.header}>
              <th className={styles.img}>Foto</th>
              <th>Nome</th>
              <th className={styles.mobile}>Cargo</th>
              <th className={styles.mobile}>Data de Admissão</th>
              <th className={styles.mobile}>Telefone</th>
              <th className={styles.circle}>
                <FaCircle />
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  <img
                    className={styles.thumb}
                    src={user.image}
                    alt={user.nome}
                  />
                </td>
                <td>{user.name}</td>
                <td className={styles.mobile}>{user.job}</td>
                <td className={styles.mobile}>
                  {new Date(user.admission_date).toLocaleDateString('pt-BR')}
                </td>
                <td className={styles.mobile}>
                  {formatPhoneNumber(user.phone)}
                </td>
                <td className={styles.button}>
                  <button>
                    <FaChevronDown />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
