import { BlogArticle } from '../models/blog-article';
import { BlogArticleSummary } from '../models/blog-article-summary';

export const blogArticles: BlogArticle[] = [
  {
    summary: {
      identifier: 'transitions',
      title: 'My thoughts on transitions',
      subtitle: 'Spinners and sliders and loaders and flashes...',
      datePosted: new Date(Date.now()),
      isDraft: true
    } as BlogArticleSummary,
    text:
    `
    In my opinion, transitions are overused, and including them can often take away from the user experience of a site.
    `
  } as BlogArticle,
  {
    summary: {
      identifier: 'solid-interface_segregation-appendix',
      title: 'The Interface Segregation Principle',
      subtitle: '... and a discussion about your appendix',
      datePosted: new Date('2021-01-15'),
      isDraft: true
    } as BlogArticleSummary,
    text:
    `
Recently I was trying to come up with contrived examples for the five SOLID principles. Here's one for the Interface Segregation principle.

As a reminder, the Interface Segregation principle states:

> No client should be forced to depend on methods it does not use.

Clean interfaces that do what the user expects them to are used all the time in real life. For example, a calculator app on your phone has a simplistic interface
 with a the numbers 0-9, and some extra bits to allow you to perform more complex operations. When clicking the '1' button, then the '+' button, then the '2' button,
 and finally the '=' button, the complexity of what's going on behind the scenes is hidden from the user. All the user cares about is that 1 + 2 = 3.

I got to thinking about how the different organs in the body are implementation details, and the purpose they serve is somewhat more important. For example,
the heart is used to pump blood around a body. However, an artificial heart can be used instead - just take out the old heart, plug in an artificial heart,
and go about your day. (This should not be taken as medical advice.) All the veins care about is that something is pumping blood through them.

No discussion on anatomy is complete without a trip to the appendix, however. As my GCSE Biology tells me, it's unclear currently what the purpose of the appendix is.
For purposes of this contrived demonstration, we'll assume it's an odd anomaly of biology, and it has no functional purpose any more. However, we will say
that it used to be important for the process of fooificiation.

The source code for a human might look something like this:

\`\`\`csharp
public interface IHuman {
  void PumpBlood();
  void ProcessFood();
  void RunFooificiation();
}
\`\`\`

If a developer who was creating a human were to implement this interface, they'd have to come up with an implementation for \`DoAppendixStuff();\`, even
if it's not needed. Let's see what can go wrong here.

### An empty method

Assume our implementation looks like this:

\`\`\`csharp
public class Human : IHuman {
  public void RunFooificiation() { }

  // Other methods...
}
\`\`\`

In this worst case scenario, another developer may have experience with a different being that also underwent fooification. They might then attempt to call this
method, not knowing that humans don't undergo fooificiation, and then get confused down the line when they don't see any side effects of fooification.

### Throw an exception

Now let's have a more explosive implementation:

\`\`\`csharp
public class Human : IHuman {
  public void RunFooificiation() {
    throw new NotImplementedException();
  }

  // Other methods...
}
\`\`\`

If this method were to be called accidentally (once again, by a developer who doesn't know humans shouldn't undergo fooification), then the human would
violently throw an exception. This is perhaps equivalent to a piece of grit blocking the appendix to cause appendicitis. Not nice.

### Do something else entirely

\`\`\`csharp
public class Human : IHuman {
  public void RunFooificiation() {
    // Actually do some stuff
  }

  // Other methods...
}
\`\`\`

This sort of code might be found if copy-pasting the implementation from somewhere else. This is perhaps the worst offender, as it's completely hidden
 to anyone not familiar with the human specification. This approach will silently trigger side effects for years to come, or until the human starts
 reporting that their body isn't working correctly.

---

Now, in all of these cases, documentating the code base can help mitigate the issue. In our (by now incredibly) contrived appendix example, this could involve
sticking a filter over the entrances to the appendix, to prevent any grit getting in. However, this assumes other developers in your team will be analysing all facets
of your code in depth. The best way to describe what your method does is via its signature; if it doesn't do what it says, get rid of it.
    `
  } as BlogArticle
];
