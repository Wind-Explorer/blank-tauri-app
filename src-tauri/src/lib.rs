#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![])
        .on_window_event(|_, event| match event {
            tauri::WindowEvent::Resized(_) => {
                std::thread::sleep(std::time::Duration::from_millis(2));
            }
            _ => {}
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}