const code = [
    {
        index : 0
    },
    {
        index: 1,
        code : ``
    },

    {
        index : 2,
        code : `#include <stdio.h>

        int search_linear(int* array , int size , int element)
        {
            for (int i = 0; i < size; i++)
            {
                if(element == array[i])
                    return i;
            }
        
            return -1;    
            
        }
        
        void main()
        {
            int arr[] = {3,5,7,8,9,4,12,23};
            int size,element,result;
            size = sizeof(arr) / sizeof(int);
            element = 9;
            result = search_linear(arr,size,element);
        
            if(result == -1)
                printf("Element not found");    
            else
                printf("Element found at index: %d",result);
        }`
    }
    ,
    {
        index:3,
        code : ``
    }
    ,
    {
        index:4,
        code : `
#include <stdio.h>

int search_binary(int *array, int size, int element)
{
    int low, high, mid;
    low = 0;
    high = size - 1;
    while (low <= high)
    {
        mid = (low + high) / 2;

        if (array[mid] == element)
        {
            return mid;
        }
        else if (array[mid] > element)
        {
            high = mid - 1;
        }
        else
        {
            low = mid + 1;
        }
    }

    return -1;
}

void main()
{
    int arr[] = {3, 5, 7, 8, 9, 10, 12, 23};
    int size, element, result;
    size = sizeof(arr) / sizeof(int);
    element = 9;
    result = search_binary(arr, size, element);

    if (result == -1)
        printf("Element not found");
    else
        printf("Element found at index: %d", result);
}
        
        `
    }
    ,
    {
        index:5,
        code : `#include <stdio.h>

        void swap(int *xp, int *yp)
        {
            int temp = *xp;
            *xp = *yp;
            *yp = temp;
        }
        
        void show_arr(int *arr, int size)
        {
            printf("[");
            for (int i = 0; i < size - 1; i++)
            {
                printf(" %d ", arr[i]);
            }
            printf("]");
        }
        
        int main()
        {
            int arr[] = {5, 8, 2, 4, 1, 7, 9, 12, 17, 13};
        
            int size = sizeof(arr) / sizeof(int);
        
            for (int pass = 0; pass < size - 1; pass++)
            {
                for (int i = 0; i < size - 1; i++)
                {
                    if (arr[i] > arr[i + 1])
                    {
                        swap(&arr[i], &arr[i + 1]);
                    }
                }
            }
        
            show_arr(arr, size);
        
            return 0;
        }`
    }
    ,
    {
        index:6,
        code : `#include <stdio.h>
        #include <stdlib.h>
        
        struct Node
        {
            int data;
            struct Node* next;
        };
        
        void display(struct Node* node)
        {
            while (node != NULL)
            {
                printf("data is: %d\n",node->data);
                node = node->next;
            }
            
        }
        
        void main()
        {
            struct Node* head = (struct Node*) malloc(sizeof(struct Node));
            struct Node* second = (struct Node*) malloc(sizeof(struct Node));
            struct Node* third = (struct Node*) malloc(sizeof(struct Node));
            struct Node* tail = (struct Node*) malloc(sizeof(struct Node));
        
            head->data = 34;
            head->next = second;
        
            second->data = 78;
            second->next = third;
        
            third->data = 12;
            third->next = tail;
        
            tail->data = 90;
            tail->next = NULL;
        
            display(head);
        }`
    }
    ,
    {
        index:7,
        code : `#include <stdio.h>
        #include <stdlib.h>
        
        struct stack
        {
            int size;
            int top;
            int *arr;
        };
        
        int isFull(struct stack *stack)
        {
            if (stack->top >= stack->size - 1)
            {
                return 1;
            }
        
            return 0;
        }
        
        int isEmpty(struct stack *stack)
        {
            if (stack->top == -1)
            {
                return 1;
            }
            return 0;
        }
        
        
        int push(struct stack *stack, int element)
        {
            if(isFull(stack))
            {
                printf("Stack overflow condition: stack is full\n");
                return 0;
            }
            stack->top++;
            stack->arr[stack->top] = element;
            return 1;
        }
        
        int pop(struct stack *stack)
        {
            if(isEmpty(stack))
            {
                printf("Stack underflow condition: stack is empty\n");
                return 0;
            }
            stack->top--;
            return 1;
        }
        
        void display(struct stack *stack)
        {
            for (int i = 0; i <= stack->top; i++)
            {
                printf("Element at index %d is : %d\n", i, stack->arr[i]);
            }
        }
        
        
        
        void main()
        {
            struct stack *stack = (struct stack *)malloc(sizeof(struct stack));
        
            stack->size = 4;
            stack->top = -1;
            stack->arr = (int *)malloc(stack->size * sizeof(int));
            printf("stack has been created successfully..!\n");
        
        
            push(stack,56);
            push(stack,37);
            push(stack,68);
            push(stack,90);
          
            display(stack);
        
            pop(stack);
        
            display(stack);
        
        }
        `
    }
    ,
    {
        index:8,
        code : ``
    }
    ,
    {
        index:9,
        code : `
#include <stdio.h>
int main()
{
    /* Here i & j for loop counters, temp for swapping,
     * count for total number of elements, number[] to
     * store the input numbers in array. You can increase
     * or decrease the size of number array as per requirement
     */
    int i, j, count, temp, number[25];

    printf("How many numbers u are going to enter?: ");
    scanf("%d", &count);

    printf("Enter %d elements: ", count);
    // Loop to get the elements stored in array
    for (i = 0; i < count; i++)
        scanf("%d", &number[i]);

    // Logic of selection sort algorithm
    for (i = 0; i < count; i++)
    {
        for (j = i + 1; j < count; j++)
        {
            if (number[i] > number[j])
            {
                temp = number[i];
                number[i] = number[j];
                number[j] = temp;
            }
        }
    }

    printf("Sorted elements: ");
    for (i = 0; i < count; i++)
        printf(" %d", number[i]);

    return 0;
}
        `
    }
    ,
    {
        index:10,
        code : `#include <stdio.h>
        #include <stdlib.h>
        
        struct Queue
        {
            int size;
            int front;
            int back;
            int* array;
        };
        
        int isFull(struct Queue* queqe)
        {
            if(queqe->back == queqe->size -1)
            {
                return 1;
            }
            return 0;
        }
        
        int isEmpty(struct Queue* queue)
        {
            if(queue->back == queue->front)
            {
                return 1;
            }
            return 0;
        }
        
        int enqueue(struct Queue* queue , int element)
        {
            if(isFull(queue))
            {
                printf("Queue is full: insertion failed\n");
                return 0;
            }
        
            queue->back++;
            queue->array[queue->back] = element;
            return 1;
        
        }
        
        int dequeue(struct Queue* queue)
        {
            if(isEmpty(queue))
            {
                printf("Queue is Empty: deletion failed..!\n");
                return 0;
            }
            queue->front++;
            return 1;
        }
        
        void display(struct Queue* queue)
        {
            printf("\n[");
            for (int i = queue->front+1; i <= queue->back; i++)
            {
                printf(" %d ",queue->array[i]);
            }
            printf("]\n");
            
        }
        
        int peak(struct Queue* queue, int postion)
        {
            if(postion<=queue->front || postion>queue->back)
            {
                printf("Invalide argument: postion out of bounds\n");
                return -1;
            }
        
            return queue->array[postion];
        }
        
        void main()
        {
            struct Queue* queue = (struct Queue*) malloc(sizeof(struct Queue));
            queue->size = 6;
            queue->front = -1;
            queue->back = -1;
            queue->array = (int *) malloc(queue->size * (sizeof(int)));
            printf("Queue is created successfully...!\n");
        
            enqueue(queue,6);
            enqueue(queue,7);
            enqueue(queue,9);
            enqueue(queue,4);
            enqueue(queue,1);
            enqueue(queue,3);
        
            dequeue(queue);
            dequeue(queue);
            display(queue);
            printf("Fetch element: %d",peak(queue,1));
        
        }`
    }
    ,
    {
        index:11,
        code : `
#include <stdio.h>
#include <stdlib.h>

void main()
{
    /* malloc and calloc are used to allocate memory dinamically */

    int size = 6;
    int *array = (int *)malloc(size * sizeof(int));

    printf("Memory allocation using malloc\n\n");

    if (array == NULL)
    {
        printf("Memory not allocated");
    }
    else
    {
        printf("Memory successfully allocated using malloc\n");
        for (int i = 0; i < size; i++)
        {
            printf("%d\n", array[i]);
        }
    }

    printf("\n\nMemory allocation using calloc\n\n");

    int *array2 = (int *)calloc(size, sizeof(int));

    if (array2 == NULL)
    {
        printf("Memory not allocated");
    }
    else
    {
        printf("Memory successfully allocated using calloc\n");
        for (int i = 0; i < size; i++)
        {
            printf("%d\n", array[i]);
        }
    }
}
        
        `
    }
    ,
    {
        index:12,
        code : `
        #include <stdio.h>
        #include <stdlib.h>
        
        struct Node
        {
            int data;
            struct Node* next;
        };
        
        void display(struct Node* node)
        {
            while (node != NULL)
            {
                printf("data is: %d\n",node->data);
                node = node->next;
            }
            
        }
        
        void main()
        {
            struct Node* head = (struct Node*) malloc(sizeof(struct Node));
            struct Node* second = (struct Node*) malloc(sizeof(struct Node));
            struct Node* third = (struct Node*) malloc(sizeof(struct Node));
            struct Node* tail = (struct Node*) malloc(sizeof(struct Node));
        
            head->data = 34;
            head->next = second;
            
            printf("Linked List Created by Pointers\n");
        
            second->data = 78;
            second->next = third;
        
            third->data = 12;
            third->next = tail;
        
            tail->data = 90;
            tail->next = NULL;
        
            display(head);
        }
        `
    }


]

export default code;