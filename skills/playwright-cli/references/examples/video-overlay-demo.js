async page => {
  await page.screencast.start({ path: 'video.webm', size: { width: 1280, height: 800 } });
  await page.goto('https://demo.playwright.dev/todomvc');

  await page.screencast.showChapter('Adding Todo Items', {
    description: 'We will add several items to the todo list.',
    duration: 2000,
  });

  await page.getByRole('textbox', { name: 'What needs to be done?' }).pressSequentially('Walk the dog', { delay: 60 });
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.waitForTimeout(1000);

  const annotation = await page.screencast.showOverlay(`
    <div style="position:absolute;top:8px;right:8px;padding:6px 12px;background:rgba(0,0,0,0.7);border-radius:8px;font-size:13px;color:white;">
      Item added successfully
    </div>
  `);

  await page.getByRole('textbox', { name: 'What needs to be done?' }).pressSequentially('Buy groceries', { delay: 60 });
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.waitForTimeout(1200);

  await annotation.dispose();

  // Highlight a specific element with a bounding box overlay
  const bounds = await page.getByText('Walk the dog').boundingBox();
  await page.screencast.showOverlay(`
    <div style="position:absolute;top:${bounds.y}px;left:${bounds.x}px;width:${bounds.width}px;height:${bounds.height}px;border:2px solid red;box-sizing:border-box;"></div>
    <div style="position:absolute;top:${bounds.y + bounds.height + 5}px;left:${bounds.x + bounds.width / 2}px;transform:translateX(-50%);padding:4px 8px;background:#333;border-radius:6px;font-size:12px;color:white;">
      First item added
    </div>
  `, { duration: 2000 });

  await page.screencast.stop();
}
