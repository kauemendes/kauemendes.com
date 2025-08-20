---
post: "why-i-started-using-powershell-instead-of-bash"
title: "5. Why I started using Powershell instead of Bash?"
description: Choosing between PowerShell Core and Bash for scripting depends on various factors, including the specific needs of your environment, the platforms you work on
image_banner: "/images/blog/powershell-vs-bash.png"
image_post: "/images/blog/powershell-vs-bash@2x.png"
date: "2024-08-20"
---
# Why I started using Powershell instead of Bash?

<img src="https://repository-images.githubusercontent.com/301529364/80afd1cf-a018-4d3f-a6bf-1cf2e1e35dfc" />

Choosing between PowerShell Core and Bash for scripting depends on various factors, including the specific needs of your environment, the platforms you work on, and your familiarity with each shell. Since I started working in an environment with a mix of different operating systems, automating tasks and making this setup work identically across different platforms has always been the biggest challenge.

In the beginning, I had to develop scripts that produced the same result using at least two different technologies: Bash and PowerShell. Depending on which machine was the target, I had to use one or the other.

This approach became very costly as these scripts grew in size, complexity, and quantity. Despite being a big fan of Linux/Unix environments and having been raised on them, and despite my fondness for Bash, we faced the difficult decision to start using PowerShell. Given that it is the native scripting tool for Windows servers and could be seamlessly installed on Linux distributions, it offered the advantage of operating on a consolidated platform with object-oriented capabilities. This proved to be extremely useful in the future when processing responses and handling complex JSON and YAML manipulations and transformations.


### Here are some reasons why you might prefer to use PowerShell Core over Bash for scripting:

1. **Cross-Platform Compatibility**

    PowerShell Core is cross-platform, running on Windows, Linux, and macOS, which makes it versatile if you need to write scripts that work across different operating systems. Bash is traditionally associated with Unix-like systems (Linux and macOS) and, while it can be installed on Windows (via WSL or Git Bash), it's not as natively integrated into Windows environments as PowerShell.

2. **Object-Oriented Pipeline**

    Unlike Bash, which primarily works with text-based streams, PowerShell Core works with objects. When you pass data between commands in PowerShell, you're passing full-fledged objects, not just strings of text. This makes it easier to manipulate data, query properties, and interact with system APIs, especially in complex automation tasks.

3. **Integration with .NET**

    PowerShell Core is built on .NET, which means you can leverage the full power of the .NET libraries within your scripts. This is particularly useful if you're working in environments where .NET is commonly used or if you need to perform tasks that are well-supported by the .NET ecosystem.

4. **Consistency in Scripting Syntax**

    PowerShell has a more consistent syntax compared to Bash. Its cmdlets (commands) are designed to follow a Verb-Noun naming convention, making them more predictable and easier to learn. For example, Get-Process is immediately recognizable as a command to retrieve processes, while Bash commands are often shorter and more cryptic.

5. **Advanced Scripting Capabilities**

    PowerShell Core supports advanced features like structured error handling (try-catch-finally), classes, and modules, allowing for more complex and robust script development. While Bash does have error handling and can be used for complex scripting, the language is less structured, and such tasks can be more cumbersome to implement.

6. **Administrative Tasks on Windows**

    If your scripting involves managing Windows environments, PowerShell Core is often the better choice due to its deep integration with Windows management tasks. Tasks like managing the registry, services, Active Directory, and other Windows-specific components are straightforward with PowerShell.

7. **Community and Industry Support**

    PowerShell has strong support from Microsoft and is widely used in enterprise environments, especially where Windows servers are prevalent. The community around PowerShell is large, and there are extensive resources, modules, and support for automating a wide range of tasks.

8. **Consistency Across Environments**

    Using PowerShell Core across different operating systems provides consistency. If you are automating tasks that involve multiple platforms (e.g., Windows and Linux), using PowerShell Core allows you to maintain a single codebase, reducing complexity and increasing maintainability.

9. **Ease of Learning for New Users**

    For users coming from a Windows background or for those who are new to scripting, PowerShell's verb-noun structure and object-oriented approach may be easier to learn and understand compared to the more syntax-heavy and text-based nature of Bash.

## Example

Of course, it's a matter of preference, but giving PowerShell a chance to be tested and trying to understand how things work under the hood can be very satisfying. As a technology enthusiast, learning a new language can help you notice details that you might have overlooked before.

In Bash, if you want to get the "name" property of a JSON object without using external CLI tools like jq, you might end up with a command line like this:

```bash
curl -s 'https://api.github.com/users/lambda' | grep '"name"' | awk -F',' '{print $1}' | cut -d':' -f2 | sed 's/'\"'/''/g' | xargs
```

Although in PowerShell, it would be as simple as this:

```pwsh
(Invoke-RestMethod -uri https://api.github.com/users/lambda).name
```

## Conclusion

While Bash is a powerful and widely used scripting language, particularly in Unix-like environments, **PowerShell Core** offers significant advantages in terms of cross-platform support, object-oriented scripting, integration with .NET, and consistency across different environments. The choice between the two should be based on your specific use cases, environment, and the tasks you need to accomplish. If your work involves a lot of Windows-based systems or you require a consistent scripting environment across different platforms, PowerShell Core may be the better choice.
