/**
 * Program that is executed through command line with the ability
 * to process user input.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
process.stdout.write('Welcome to ALX, what is your name?\n');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk !== null) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
