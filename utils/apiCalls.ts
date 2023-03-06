export interface todoType {
  _id: string;
  title: string;
  isComplete: boolean;
}

//? Get API Calls
export async function getAllTodos() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const todos: todoType[] = await res.json();
  return todos;
}

export async function getActiveTodos() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/active-todos`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const todos: todoType[] = await res.json()
  return todos
}

export async function getCompletedTodos() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/completed-todos`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
 const todos: todoType[] = await res.json();
 return todos;
}

export async function getActiveCount() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/active-count`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

//? POST API Calls
export async function addTodoApi(todo: todoType) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/add-todo`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    mode: 'cors',
    body: JSON.stringify({
      isComplete: todo.isComplete,
      title: todo.title,
    }),
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export async function updateTodo(todo: todoType) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/update`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    mode: 'cors',
    body: JSON.stringify({
      isComplete: !todo.isComplete,
      productId: todo._id,
      title: todo.title,
    }),
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export async function deleteTodoById(productId: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/delete-todo`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    mode: 'cors',
    body: JSON.stringify({
      productId: productId,
    }),
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export async function clearCompleted() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/clear-completed`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      // body: JSON.stringify({
      //   productId: productId,
      // }),
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
