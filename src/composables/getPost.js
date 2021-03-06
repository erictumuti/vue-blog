
import { ref } from 'vue'

const getPost = (id) => {
	const post = ref(null)
    const error = ref(null)

    const load = async () => {
      try {
		//   simulate delay i.e loader
		await new Promise(resolve => {
			setTimeout(resolve, 2000)
		})
		// end
        let data = await fetch('http://localhost:3000/posts/' + id)
        if(!data.ok) {
          throw Error('post does not exist')
        }
        post.value = await data.json()
      }
      catch(err) {
        error.value = err.message
        console.log(error.value)
      }
	}

	return { post, error, load }
}
export default getPost