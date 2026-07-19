def greet(name: str) -> str:
    """友好的问候函数"""
    return f"Hello, {name}!"

if __name__ == "__main__":
    for n in ["世界", "Nexus", "AI"]:
        print(greet(n))
