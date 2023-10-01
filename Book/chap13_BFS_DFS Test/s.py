def balancedIndex(p):
    count = 0

    for i in range(len(p)):
        if p[i] == "(":
            count += 1
        else:
            count -= 1

        if count == 0:
            return i

def checkProfer(p):
    count = 0

    for i in p:
        if i == "(":
            count += 1
        else:
            if count == 0:
                return False
            count -= 1
        
    return True


def solution(p):
    answer = ""

    if p == "":
        return answer

    index = balancedIndex(p)
    u = p[:index + 1]
    v = p[index + 1:]

    if checkProfer(u):
        answer = u + solution(v); 
    else:
        answer = "("
        answer += solution(v)
        answer += ")"
        u = list(u[1:-1])

        for i in range(len(u)):
            if u[i] == "(":
                u[i] = ")"
            else:
                u[i] = "("
            
        answer += "".join(u)

    return answer

input = [3,
    "(()())()",
    ")(",
    "()))((()",
]
tc = input[0]

for t in range(1,tc + 1):
    print(solution(input[t]))
