import React from 'react'
import { BiEdit,BiTrashAlt } from 'react-icons/bi';

const table = () => {
  return (
    <table className='min-w-full table-auto mt-10'>
        <thead>
            <tr className='bg-gray-800'>
                <th className='px-16 py-6'>
                  <span className='text-gray-200'>Adı</span>  
                </th>
                <th className='px-16 py-6'>
                  <span className='text-gray-200'>Email</span>  
                </th>
                <th className='px-16 py-6'>
                  <span className='text-gray-200'>Satış</span>  
                </th>
                <th className='px-16 py-6'>
                  <span className='text-gray-200'>D.Tarihi</span>  
                </th>
                <th className='px-16 py-6'>
                  <span className='text-gray-200'>Durumu</span>  
                </th>
                <th className='px-16 py-6'>
                  <span className='text-gray-200'>İşlemler</span>  
                </th>
            </tr>
        </thead>
        <tbody className='bg-gray-300'>
            <tr className='bg-gray-100 text-center'>
                <td className='px-16 py-2 flex flex-row items-center'>
                    <img src="#" alt="" />
                    <span className='text-center ml-2 font-semibold'> John Doe</span>
                </td>
                <td className='px-16 py-3'>
                    <span> johnDoe@nextjs.com</span>
                </td>
                <td className='px-16 py-3'>
                    <span> 2500 TL</span>
                </td>
                <td className='px-16 py-3'>
                    <span > 19.10.2018</span>
                </td>
                <td className='px-16 py-3'>
                    <button className='cursor'><span className='bg-green-500 text-white px-5 py-1 rounded-full' >Aktif</span></button>
                </td>
                <td className='px-16 py-2 justify-around gap-10'>
                    <button className='cursor'> <BiEdit size={25} color={"rgb(34,69,197)"}></BiEdit></button>
                    <button className='cursor'> <BiTrashAlt size={25} color={"rgb(231,85,85)"}></BiTrashAlt></button>
                </td>
            </tr>
        </tbody>
    </table>  
  );
}
export default table