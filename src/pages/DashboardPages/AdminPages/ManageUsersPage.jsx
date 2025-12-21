import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loader from '../../../components/Loader';
import { useAxiosSecure } from '../../../hooks/useAxiosSecure';

export default function ManageUsersPage() {
  const axiosSecure = useAxiosSecure();
  const {
    isPending,
    data: users = [],
    refetch,
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    },
  });

  // console.log(users);

  async function handleChangeUser(id, role) {
    const roleInfo = { role };
    const res = await axiosSecure.patch(`/users/${id}/role`, roleInfo);

    if (res.data.acknowledged) {
      toast.success(`User role change to ${role} successfully!`);
      refetch();
    }
  }

  if (isPending) return <Loader />;

  return (
    <section className='space-y-6'>
      <h1>All Users</h1>

      <div className='overflow-x-auto rounded-box border border-base-content/5 bg-base-100'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              <th>SL.</th>
              <th>Name</th>
              <th>Photo</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.displayName}</td>
                <td className=' rounded-full'>
                  <img
                    className='w-10 h-10 object-cover rounded-full'
                    src={user.photoURL}
                    alt={user.displayName}
                  />
                </td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  {user.role === 'admin' && (
                    <div className='flex gap-2'>
                      <button
                        onClick={() => handleChangeUser(user._id, 'user')}
                        className='btn btn-primary'>
                        Make User
                      </button>
                      <button
                        onClick={() => handleChangeUser(user._id, 'creator')}
                        className='btn btn-secondary'>
                        Make Creator
                      </button>
                    </div>
                  )}

                  {user.role === 'user' && (
                    <div className='flex gap-2'>
                      <button
                        onClick={() => handleChangeUser(user._id, 'admin')}
                        className='btn btn-primary'>
                        Make Admin
                      </button>
                      <button
                        onClick={() => handleChangeUser(user._id, 'creator')}
                        className='btn btn-secondary'>
                        Make Creator
                      </button>
                    </div>
                  )}

                  {user.role === 'creator' && (
                    <div className='flex gap-2'>
                      <button
                        onClick={() => handleChangeUser(user._id, 'admin')}
                        className='btn btn-primary'>
                        Make Admin
                      </button>
                      <button
                        onClick={() => handleChangeUser(user._id, 'user')}
                        className='btn btn-secondary'>
                        Make User
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
