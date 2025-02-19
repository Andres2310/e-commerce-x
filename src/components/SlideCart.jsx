import { Fragment, useContext, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { BiXCircle, BiChevronLeft } from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'
import { AppContext } from '../Context.jsx'
import Payment from './Payment.jsx'
import ProductsCart from './ProductsCart.jsx'

function SlideCart () {
  const { openS, setOpen, products, setProducts, method, setCount } = useContext(AppContext)
  const [show, setShow] = useState(true)
  const [reduce, setReduce] = useState(0)

  useEffect(() => {
    const temp = products.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    )
    setReduce(temp)
  }, [products])

  const string =
    `Hola! Quisiera comprar los siguientes productos:\n${products.map(
      (product) =>
        `·${product.quantity} ${product.name} Talla ${product.currentSize} - ${product.price}Bs.\n`
    )}\n*Método de pago: ${method}\nTOTAL: ${reduce}Bs.`.replaceAll(
      ',',
      ''
    )

  const handleShowSection = () => {
    show ? setShow(false) : setShow(true)
  }

  const finalizePurchase = () => {
    setProducts([])
    setCount(0)
    setShow(true)
  }

  return (
    <Transition.Root
      show={openS}
      as={Fragment}
    >
      <Dialog
        as='div'
        className='relative z-10'
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <Dialog.Panel className='pointer-events-auto w-screen max-w-md'>
                  <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl dark:bg-gray-900'>
                    <div className='flex-1 overflow-y-auto py-6 px-4 sm:px-6'>
                      <div className='flex items-center justify-start'>
                        {!show && (
                          <BiChevronLeft
                            className='mr-3 text-4xl text-slate-400 hover:text-slate-900 dark:hover:text-slate-50'
                            onClick={() => setShow(true)}
                          />
                        )}

                        <Dialog.Title className='mr-auto text-xl font-medium text-gray-900 dark:text-slate-50'>
                          {' '}
                          Carrito de compras{' '}
                        </Dialog.Title>
                        <div className='ml-3 flex h-7 items-center'>
                          <BiXCircle
                            className='text-3xl text-slate-400'
                            onClick={() => setOpen(false)}
                          />
                        </div>
                      </div>

                      {show
                        ? (
                          <ProductsCart products={products} />
                          )
                        : (
                          <Payment />
                          )}
                    </div>

                    <div className='border-t border-slate-700 py-6 px-4 sm:px-6'>
                      <div className='flex justify-between text-lg font-medium text-gray-900 dark:text-slate-200'>
                        <p className='font-semibold '>Total</p>
                        <p className='font-semibold text-emerald-600 dark:text-emerald-500'>{`$${reduce}`}</p>
                      </div>
                      <p className='mt-0.5 text-base text-gray-500 dark:text-gray-300'>
                        Monto total a pagar
                      </p>

                      {show
                        ? (
                          <div className='mt-6'>
                            <div
                              onClick={handleShowSection}
                              className='flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
                            >
                              Completar pago
                            </div>
                          </div>
                          )
                        : (
                          <button
                            onClick={finalizePurchase}
                            className='mt-6 w-full'
                          >
                            <a
                              target='_blank'
                              href={`https://wa.me/59170767393?text=${encodeURIComponent(
                              string
                            )}`}
                              className='transition-colors: flex items-center justify-center gap-1 rounded-md border border-transparent bg-emerald-500 px-6 py-3 text-base font-semibold text-white shadow-sm duration-300 hover:bg-emerald-700'
                              rel='noreferrer'
                            >
                              <BsWhatsapp className='text-xl' />
                              Whatsapp
                            </a>
                          </button>
                          )}

                      <div className='mt-6 flex justify-center text-center text-gray-500 dark:text-gray-300'>
                        <button
                          type='button'
                          className='text-lg font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-500'
                          onClick={() => setOpen(false)}
                        >
                          Sigue comprando
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default SlideCart
