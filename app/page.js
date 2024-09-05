'use client'
import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
  })

  const formatPhone = (value) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length > 11) return formData.phone
    const char = { 0: '(', 2: ') ', 7: '-' }
    let phone = ''
    for (let i = 0; i < numbers.length; i++) {
      phone += (char[i] || '') + numbers[i]
    }
    return phone
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'phone') {
      const formattedPhone = formatPhone(value)
      setFormData((prev) => ({ ...prev, [name]: formattedPhone }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const allFieldsFilled = formData.name && formData.email && formData.company && formData.phone
  const isValidPhone = formData.phone.match(/\([0-9]{2}\) [0-9]{5}-[0-9]{4}/)
  const allFieldsValid = allFieldsFilled && isValidPhone

  return (
    <div>
      <Head>
        <title>Landing Page - Fale com um Especialista</title>
        <meta
          name="description"
          content="Preencha o formulário em nossa landing page para entrar em contato com um especialista e saber mais sobre nossos serviços."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-gray-100 text-gray-800 p-10">
          <img src="/logo.png" alt="Logo da Empresa" className="h-8" />
      </header>

      <main className="bg-gradient-to-b from-blue-700 to-blue-900 p-10 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-white">
          <h2 className="text-4xl font-bold">Desenvolvimento e gestão de serviços tecnológicos!</h2>
          <p className="text-xl mt-4">
            <span className="text-lime-300">➔</span> Gestão técnica de Programas Setoriais da Qualidade
          </p>
          <p className="text-xl mt-4">
            <span className="text-lime-300">➔</span> Avaliação de produtos inovadores para construção civil
          </p>
          <p className="text-xl mt-4">
            <span className="text-lime-300">➔</span> Realização de ensaios de materiais de construção
          </p>
        </div>
        <form
          className="text-indigo-700 font-bold p-4 mt-8 md:mt-0 md:w-1/2 flex flex-col items-center"
          action="#"
          method="POST"
          aria-label="Formulário de Contato"
        >
          <div className="bg-white p-8 rounded-2xl">
            <h2 className="text-xl mb-4">
              Informe seus dados <br /> para falar com um especialista:
            </h2>
            <div className="mb-4 flex items-center">
              <label htmlFor="name" className="mr-4 w-20">
                Nome:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-3/4 p-2 border border-gray-300 rounded"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 flex items-center">
              <label htmlFor="email" className="mr-4 w-20">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                className="w-3/4 p-2 border border-gray-300 rounded"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 flex items-center">
              <label htmlFor="company" className="mr-4 w-20">
                Empresa:
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                className="w-3/4 p-2 border border-gray-300 rounded"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 flex items-center">
              <label htmlFor="phone" className="mr-4 w-20">
                Telefone:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                pattern="\([0-9]{2}\) [0-9]{5}-[0-9]{4}"
                className="w-3/4 p-2 border border-gray-300 rounded"
                onChange={handleChange}
                value={formData.phone}
              />
            </div>
            <button
              type="submit"
              disabled={!allFieldsValid}
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded self-center ${
                !allFieldsValid ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Falar com um especialista
            </button>
          </div>
        </form>
      </main>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <h2 className="text-2xl sm:text-3xl text-indigo-700 font-bold mb-12">Serviços</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <div className="text-4xl font-bold text-white bg-gradient-to-b from-blue-700 to-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto -mt-8 mb-4">
                1
              </div>
              <p className="text-gray-700">Prover suporte para a avaliação de novos produtos e tecnologias</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <div className="text-4xl font-bold text-white bg-gradient-to-b from-blue-700 to-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto -mt-8 mb-4">
                2
              </div>
              <p className="text-gray-700">Reduzir riscos na utilização de novos produtos e tecnologias</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <div className="text-4xl font-bold text-white bg-gradient-to-b from-blue-700 to-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto -mt-8 mb-4">
                3
              </div>
              <p className="text-gray-700">Orientar o mercado na escolha de novos produtos e tecnologias</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <div className="text-4xl font-bold text-white bg-gradient-to-b from-blue-700 to-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto -mt-8 mb-4">
                4
              </div>
              <p className="text-gray-700">Estimular o processo de inovação tecnológica</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <div className="text-4xl font-bold text-white bg-gradient-to-b from-blue-700 to-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto -mt-8 mb-4">
                5
              </div>
              <p className="text-gray-700">
                Buscar a concessão de uma aprovação técnica, com base em um documento de avaliação técnica
              </p>
            </div>
          </div>
        </div>
        <button className="bg-yellow-300 text-indigo-700 font-bold py-2 px-8 rounded mt-8">
          Fale com um especialista
        </button>
      </section>

      <footer className="bg-gray-100 p-12 text-center">
        <img src="/logo.png" alt="Logo Tesis" className="h-8 mx-auto" />
      </footer>
    </div>
  )
}
