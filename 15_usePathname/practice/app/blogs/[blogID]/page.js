export  const dynamicParams = false; // its dosn't allow to genereate new pages

export async function generateStaticParams() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await  response.json();
  console.log(data);
  
  return data.map(({id}) => ({blogID : `${id}`}));
}

export default async function BlogID({ params }) {
  const { blogID } = await params;

  return (
    <div className="h-screen flex items-center justify-center text-3xl font-bold">
      This is blog : {blogID} page.
    </div>
  );
}