import * as AlertDialog from '@radix-ui/react-alert-dialog'
import Link from 'next/link'

interface Props {
  open: boolean
  passedLevel: boolean
}

export default function Modal({ open, passedLevel }: Props) {
  const handleReload = () => {
    window.location.reload();
  };
  
  return (
    <AlertDialog.Root open={open}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="bg-black/60 inset-0 fixed" />
        <AlertDialog.Content className="fixed z-50 bg-light-blue py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
          <main className="flex flex-col justify-center items-center ">
            <AlertDialog.Title className="text-3xl text-[#004d59] font-bold text-center ">
              {passedLevel
                ? 'Parabéns, você conseguiu!'
                : (<label className='text-red-600'>Não foi dessa vez :( </label>)}
            </AlertDialog.Title>
            {passedLevel ? (
              <button className="mt-8 bg-light-green p-4 rounded-2xl text-white font-bold border-4 border-dark-green">
                <Link href="/levels" className="text-xl ">
                  Próximo nível
                </Link>
              </button>
            ) : (
              <button className="mt-8 bg-light-green p-4 rounded-2xl text-white font-bold border-4 border-dark-green" onClick={handleReload}>
                <Link href="/levelone" className="text-xl ">
                  Tentar novamente
                </Link>
              </button>
            )}
          </main>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}
