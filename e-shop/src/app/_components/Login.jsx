import React from 'react'

const login = () => {
  return (
    
 <div class="flex items-center justify-center bg-gray-100 px-4">
  <div class="w-full max-w-sm bg-white p-6 rounded-xl shadow-md">
    <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">Login Form</h2>
    <form>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm mb-2" for="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm mb-2" for="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="••••••••"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div class="flex items-center justify-between mb-4">
        <label class="flex items-center text-sm text-gray-600">
          <input type="checkbox" class="mr-2" />
          Remember me
        </label>
        <a href="#" class="text-sm text-blue-600 hover:underline">Forgot password?</a>
      </div>
      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Login
      </button>
    </form>
 
    <p class="mt-4 text-sm text-center text-gray-600">
      Don't have an account?
      <a href="#" class="text-blue-600 hover:underline">Sign up</a>
    </p>
  </div>
</div>

  )
}

export default login