// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SyncOnOutlinedSvg from '@colelab/icons-svg/es/asn/SyncOnOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SyncOnOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SyncOnOutlinedSvg }, slots);
  },
});
